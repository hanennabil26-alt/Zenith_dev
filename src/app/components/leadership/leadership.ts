import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leadership',
  imports: [CommonModule],
  templateUrl: './leadership.html',
  styleUrl: './leadership.scss'
})
export class LeadershipComponent {
  currentIndex = 0;
  dragStartX = 0;
  isDragging = false;
  dragOffset = 0;

  team = [
    { name: 'Eng. Abdallah Mahmoud', role: 'CEO' },
    { name: 'Mr. Mahmoud Said', role: 'CO-FOUNDER' },
    { name: 'Eng. Ahmed Elseady', role: 'COO' },
    { name: 'Sameh Shamakh', role: 'CFO' },
    { name: 'Mahmoud El-Nasharty', role: 'Sales Manager' },
    { name: 'Kareem Saadawy', role: 'Accountant' },
  ];

  get dots() { return [0, 1]; }
  setIndex(i: number) { this.currentIndex = i; }

  get trackTransform(): string {
    const base = this.currentIndex * 427;
    return `translateX(calc(-${base}px + ${this.dragOffset}px))`;
  }

  onDragStart(e: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.dragStartX = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
    this.dragOffset = 0;
  }

  @HostListener('window:mousemove', ['$event'])
  @HostListener('window:touchmove', ['$event'])
  onDragMove(e: MouseEvent | TouchEvent) {
    if (!this.isDragging) return;
    const x = e instanceof MouseEvent ? e.clientX : e.touches[0].clientX;
    this.dragOffset = x - this.dragStartX;
  }

  @HostListener('window:mouseup')
  @HostListener('window:touchend')
  onDragEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    if (this.dragOffset < -80 && this.currentIndex < this.dots.length - 1) {
      this.currentIndex++;
    } else if (this.dragOffset > 80 && this.currentIndex > 0) {
      this.currentIndex--;
    }
    this.dragOffset = 0;
  }
}
