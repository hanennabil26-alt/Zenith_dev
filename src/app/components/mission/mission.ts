import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mission',
  imports: [CommonModule],
  templateUrl: './mission.html',
  styleUrl: './mission.scss'
})
export class MissionComponent {
  cards = [
    {
      icon: 'target',
      title: 'MISSION',
      text: 'Developing exceptional real estate projects that combine modern design, high construction quality, and strategic locations to meet the needs of clients and investors.'
    },
    {
      icon: 'eye',
      title: 'VISION',
      text: 'To become one of the leading real estate development companies in the region by delivering innovative projects that set new standards in quality and sustainability.'
    },
    {
      icon: 'diamond',
      title: 'VALUES',
      text: 'Transparency, professionalism, and commitment to excellence are the foundations upon which Zenith Developments builds long-term relationships with partners.'
    }
  ];
}
