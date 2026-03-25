import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leadership',
  imports: [CommonModule],
  templateUrl: './leadership.html',
  styleUrl: './leadership.scss'
})
export class LeadershipComponent {
  currentIndex = 0;

  team = [
    { name: 'Eng. Abdallah Mahmoud', role: 'CEO' },
    { name: 'Mr. Mahmoud Said', role: 'CO-FOUNDER' },
    { name: 'Eng. Ahmed Elseady', role: 'COO' },
    { name: 'Sameh Shamakh', role: 'CFO' },
    { name: 'Mahmoud El-Nasharty', role: 'Sales Manager' },
    { name: 'Kareem Saadawy', role: 'Accountant' },
    { name: 'Khaled Hassan', role: 'Construction Manager' },
    { name: 'Mona Fahmy', role: 'Marketing Strategy' },
  ];

  get dots() { return [0, 1, 2]; }
  setIndex(i: number) { this.currentIndex = i; }
}
