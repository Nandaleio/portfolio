import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
 items = [
  {label: 'Home', href: '#'},
  {label: 'About', href: '#'},
  {label: 'Experience', href: '#jobs'},
  {label: 'Projects', href: '#project'},
  {label: 'Contact', href: '#contact'},
 ];

}
