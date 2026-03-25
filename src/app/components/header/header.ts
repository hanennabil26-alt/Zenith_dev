import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  navLinks = [
    { label: 'ABOUT', target: 'about' },
    { label: 'SERVICES', target: 'services' },
    { label: 'PROJECTS', target: 'projects' },
    { label: 'LEADERSHIP', target: 'leadership' },
    { label: 'CONTACT', target: 'contact' },
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
