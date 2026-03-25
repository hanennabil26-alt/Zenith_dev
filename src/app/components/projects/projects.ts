import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const heroImg = 'https://www.figma.com/api/mcp/asset/81135ed1-f12c-4d88-8afb-acc99bf7543e';
const villaImg = 'https://www.figma.com/api/mcp/asset/ce0823f8-f0f3-43a4-9e54-a3636c318124';
const downloadIcon = 'https://www.figma.com/api/mcp/asset/45804de6-6f9c-4b4b-8b0a-f1e9833eacce';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class ProjectsComponent {
  currentIndex = 0;

  projects = [
    { location: 'NEW CAIRO', title: 'Tulip Al-Tagamoa', desc: 'A premium residential community redefining luxury living with sustainable smart-home integration and lush landscapes.', img: villaImg },
    { location: 'NEW CAPITAL', title: 'North House', desc: 'A revolutionary commercial hub featuring futuristic architecture and ultra-efficient workspace layouts.', img: heroImg },
    { location: 'NORTH COAST', title: 'North Coast', desc: 'An exclusive coastal retreat blending natural beauty with high-end architectural innovation.', img: heroImg },
    { location: 'DOWNTOWN', title: 'Zenith Corporate', desc: 'A state-of-the-art corporate landmark designed for global enterprises seeking a prestigious identity.', img: heroImg },
  ];

  downloadIcon = downloadIcon;

  get dots() { return this.projects.map((_, i) => i); }

  setIndex(i: number) { this.currentIndex = i; }
}
