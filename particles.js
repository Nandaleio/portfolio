const canvas = document.getElementById('particles-bg');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 60;
const connectionDistance = 120;

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function getThemeColor() {
    const root = document.documentElement;
    const styles = getComputedStyle(root);
    const fg = styles.getPropertyValue('--foreground').trim();
    const muted = styles.getPropertyValue('--muted').trim() || fg;
    return { fg, muted };
}

function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

class Particle {
    constructor() {
        this.reset();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.baseOpacity = Math.random() * 0.4 + 0.3;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
    }

    draw(color) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }
}

function init() {
    resize();
    particles = [];
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
}

function animate() {
    const { fg, muted } = getThemeColor();
    const fgRgb = hexToRgb(fg);
    const mutedRgb = hexToRgb(muted);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => p.update());

    for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        const particleColor = fgRgb 
            ? `rgba(${fgRgb.r}, ${fgRgb.g}, ${fgRgb.b}, ${p1.baseOpacity})`
            : (fg || 'rgba(100, 100, 100, 0.5)');
        p1.draw(particleColor);

        for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectionDistance) {
                const opacity = (1 - distance / connectionDistance) * 0.3;
                const lineColor = mutedRgb
                    ? `rgba(${mutedRgb.r}, ${mutedRgb.g}, ${mutedRgb.b}, ${opacity})`
                    : (muted || `rgba(128, 128, 128, ${opacity})`);
                
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = lineColor;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }

    requestAnimationFrame(animate);
}

window.addEventListener('resize', resize);

init();
animate();
