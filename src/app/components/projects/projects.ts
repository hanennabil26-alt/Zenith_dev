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
  isDragging = false;
  private dragStartX = 0;
  private dragThreshold = 50;

  projects = [
    { location: 'NEW CAIRO', title: 'Tulip Al-Tagamoa', desc: 'A premium residential community redefining luxury living with sustainable smart-home integration and lush landscapes.', img: villaImg },
    { location: 'NEW CAPITAL', title: 'North House', desc: 'A revolutionary commercial hub featuring futuristic architecture and ultra-efficient workspace layouts.', img: heroImg },
    { location: 'NORTH COAST', title: 'North Coast', desc: 'An exclusive coastal retreat blending natural beauty with high-end architectural innovation.', img: heroImg },
    { location: 'DOWNTOWN', title: 'Zenith Corporate', desc: 'A state-of-the-art corporate landmark designed for global enterprises seeking a prestigious identity.', img: heroImg },
  ];

  downloadIcon = downloadIcon;

  get cardWidth(): number {
    return window.innerWidth <= 768 ? window.innerWidth - 40 : 472;
  }

  get trackTransform(): string {
    return `translateX(-${this.currentIndex * (this.cardWidth + (window.innerWidth <= 768 ? 20 : 48))}px)`;
  }

  setIndex(i: number) { this.currentIndex = i; }

  onDragStart(e: MouseEvent) {
    this.isDragging = true;
    this.dragStartX = e.clientX;
  }

  onDragMove(e: MouseEvent) {
    if (!this.isDragging) return;
    e.preventDefault();
  }

  onDragEnd(e?: MouseEvent) {
    if (!this.isDragging) return;
    const diff = this.dragStartX - (e?.clientX ?? this.dragStartX);
    if (diff > this.dragThreshold && this.currentIndex < this.projects.length - 1) {
      this.currentIndex++;
    } else if (diff < -this.dragThreshold && this.currentIndex > 0) {
      this.currentIndex--;
    }
    this.isDragging = false;
  }

  onTouchStart(e: TouchEvent) {
    this.dragStartX = e.touches[0].clientX;
  }

  onTouchMove(e: TouchEvent) {
    e.preventDefault();
  }

  onTouchEnd(e: TouchEvent) {
    const diff = this.dragStartX - e.changedTouches[0].clientX;
    if (diff > this.dragThreshold && this.currentIndex < this.projects.length - 1) {
      this.currentIndex++;
    } else if (diff < -this.dragThreshold && this.currentIndex > 0) {
      this.currentIndex--;
    }
  }
}
