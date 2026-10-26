// Spinning globe: auto-rotates, drag to spin it yourself, scroll or pinch to zoom.
// onSelect(place) runs when a marker is clicked, onRender() after every redraw.
function createGlobe(container, places, { onSelect, onRender }) {
  const padding = 21;
  const spinSpeed = 0.1;
  const maxZoom = 8;
  const markerRadius = 8;
  // Markers closer than this on screen get pushed apart, with a leader line back to the real location
  const markerSpacing = markerRadius * 2 + 10;

  let baseScale = 1;
  let zoom = 1;
  let dragging = false;
  // Why the spin is paused, e.g. 'popover' or 'drawer'; it only resumes once every reason is gone.
  // The timer only runs while spinning, so an idle globe costs nothing between frames.
  const spinPauses = new Set();
  let spinTimer = null;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

  const projection = d3.geoOrthographic();
  const path = d3.geoPath(projection);
  const svg = d3.select(container).append('svg');

  const ocean = svg.append('path').datum({ type: 'Sphere' }).attr('class', 'ocean');
  const graticule = svg.append('path').datum(d3.geoGraticule10()).attr('class', 'graticule');
  const land = svg.append('path').attr('class', 'land');
  const borders = svg.append('path').attr('class', 'borders');

  const leaders = svg.append('g')
    .selectAll('g')
    .data(places)
    .join('g')
    .attr('class', 'leader');
  leaders.append('line');
  leaders.append('circle').attr('r', 2.5);

  const markers = svg.append('g')
    .selectAll('circle')
    .data(places)
    .join('circle')
    .attr('class', 'marker')
    .attr('r', markerRadius)
    .attr('tabindex', 0)
    .attr('role', 'button')
    .on('click', (event, d) => {
      event.stopPropagation();
      onSelect(d);
    })
    .on('keydown', (event, d) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        onSelect(d);
      }
    });

  // Shows the city name on hover
  markers.append('title');

  // A point is visible when it is less than 90° away from the globe's center
  function isVisible(coords) {
    const [lambda, phi] = projection.rotate();
    return d3.geoDistance(coords, [-lambda, -phi]) < Math.PI / 2;
  }

  // Sets d.anchor (projected location) and d.pos (where the marker is drawn) for each visible place.
  // Overlapping markers are pushed apart along the line between them, so their layout matches the map.
  function layoutMarkers(visible) {
    visible.forEach((d) => {
      d.anchor = projection(d.coords);
      d.pos = [...d.anchor];
    });
    for (let pass = 0; pass < 10; pass++) {
      let moved = false;
      for (let i = 0; i < visible.length; i++) {
        for (let j = i + 1; j < visible.length; j++) {
          const a = visible[i];
          const b = visible[j];
          let dx = b.pos[0] - a.pos[0];
          let dy = b.pos[1] - a.pos[1];
          const dist = Math.hypot(dx, dy);
          if (dist >= markerSpacing) continue;
          if (dist < 0.5) {
            // Too close to give a direction, fall back to the real locations, then to straight down
            dx = b.anchor[0] - a.anchor[0];
            dy = b.anchor[1] - a.anchor[1];
            if (Math.hypot(dx, dy) < 0.01) [dx, dy] = [0, 1];
          }
          const length = Math.hypot(dx, dy);
          const push = (markerSpacing - dist) / 2;
          a.pos[0] -= (dx / length) * push;
          a.pos[1] -= (dy / length) * push;
          b.pos[0] += (dx / length) * push;
          b.pos[1] += (dy / length) * push;
          moved = true;
        }
      }
      if (!moved) break;
    }
  }

  function render() {
    ocean.attr('d', path);
    graticule.attr('d', path);
    land.attr('d', path);
    borders.attr('d', path);

    const visible = places.filter((d) => isVisible(d.coords));
    layoutMarkers(visible);
    const shown = (d) => visible.includes(d);
    const displaced = (d) => shown(d) && Math.hypot(d.pos[0] - d.anchor[0], d.pos[1] - d.anchor[1]) > 1;

    markers
      .attr('display', (d) => (shown(d) ? null : 'none'))
      .filter(shown)
      .attr('cx', (d) => d.pos[0])
      .attr('cy', (d) => d.pos[1]);
    leaders.attr('display', (d) => (displaced(d) ? null : 'none'));
    leaders.filter(displaced).select('line')
      .attr('x1', (d) => d.anchor[0])
      .attr('y1', (d) => d.anchor[1])
      .attr('x2', (d) => d.pos[0])
      .attr('y2', (d) => d.pos[1]);
    leaders.filter(displaced).select('circle')
      .attr('cx', (d) => d.anchor[0])
      .attr('cy', (d) => d.anchor[1]);
    onRender();
  }

  // The svg covers the whole container at 1 unit per pixel; the unzoomed globe fits in the space under the header
  function resize() {
    const { width, height } = container.getBoundingClientRect();
    const top = container.querySelector('header').offsetHeight;
    baseScale = Math.max(Math.min(width, height - top) / 2 - padding, 10);
    svg.attr('viewBox', `0 0 ${width} ${height}`);
    projection
      .translate([width / 2, top + (height - top) / 2])
      .scale(baseScale * zoom);
    render();
  }

  // world is the countries-110m topology, which has both the land and each country's shape
  function loadMap(world) {
    land.datum(topojson.feature(world, world.objects.land));
    // Only lines shared by two countries, the coastline is already the edge of the land
    borders.datum(topojson.mesh(world, world.objects.countries, (a, b) => a !== b));
  }

  // Rotation is divided by the zoom so the surface moves at the same speed under the cursor
  svg.call(d3.drag()
    .filter((event) => !event.button && !(event.touches && event.touches.length > 1))
    .on('start', () => {
      dragging = true;
      svg.interrupt('focus');
    })
    .on('drag', (event) => {
      const [lambda, phi] = projection.rotate();
      const speed = 0.4 / zoom;
      projection.rotate([lambda + event.dx * speed, Math.max(-90, Math.min(90, phi - event.dy * speed))]);
      render();
    })
    .on('end', () => { dragging = false; }));

  // Only the zoom factor is used, panning stays with the drag above.
  // Mouse drags and one-finger touches are left to it, zoom gets the wheel, double-click and pinch.
  svg.call(d3.zoom()
    .scaleExtent([1, maxZoom])
    .filter((event) => event.type === 'wheel' || event.type === 'dblclick'
      || (event.type === 'touchstart' && event.touches.length > 1))
    .on('zoom', (event) => {
      zoom = event.transform.k;
      projection.scale(baseScale * zoom);
      render();
    }));

  function start() {
    loadMap(worldAtlas);
    // Watches the container rather than the window, so the globe follows the section as the drawer pushes it
    new ResizeObserver(resize).observe(container);
    // No auto-spin for people who asked their system for less motion
    const followMotionSetting = () => (reducedMotion.matches ? pauseSpin : resumeSpin)('reduced-motion');
    reducedMotion.addEventListener('change', followMotionSetting);
    followMotionSetting();
  }

  function spin() {
    if (dragging) return;
    const [lambda, phi] = projection.rotate();
    projection.rotate([lambda + spinSpeed / zoom, phi]);
    render();
  }

  function updateSpin() {
    if (!spinPauses.size && !spinTimer) {
      spinTimer = d3.timer(spin);
    } else if (spinPauses.size && spinTimer) {
      spinTimer.stop();
      spinTimer = null;
    }
  }

  function pauseSpin(reason) {
    spinPauses.add(reason);
    updateSpin();
  }

  function resumeSpin(reason) {
    spinPauses.delete(reason);
    updateSpin();
  }

  return {
    start,
    isVisible: (place) => isVisible(place.coords),
    markerRect: (place) => markers.filter((d) => d === place).node().getBoundingClientRect(),
    setActive(place) {
      markers.classed('active', (d) => d === place);
    },
    pauseSpin,
    resumeSpin,
    // Turns the globe so the place sits in the middle, going the short way around
    focus(place) {
      const from = projection.rotate();
      const [lon, lat] = place.coords;
      const lambda = from[0] + ((((-lon - from[0]) % 360) + 540) % 360) - 180;
      const rotate = d3.interpolate(from, [lambda, -lat, 0]);
      svg.interrupt('focus').transition('focus')
        .duration(reducedMotion.matches ? 0 : 800)
        .tween('rotate', () => (t) => {
          projection.rotate(rotate(t));
          render();
        });
    },
    // label(place) gives the marker's accessible name and hover tooltip
    setLabels(label) {
      markers.attr('aria-label', label);
      markers.select('title').text(label);
    },
  };
}
