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
      icon: 'https://www.figma.com/api/mcp/asset/bdcd437a-10e0-4b8d-a82c-c6561003afeb',
      title: 'MISSION',
      text: 'Developing exceptional real estate projects that combine modern design, high construction quality, and strategic locations to meet the needs of clients and investors.'
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/bd0e9b9d-27ae-4f55-860a-26ef60eeb84c',
      title: 'VISION',
      text: 'To become one of the leading real estate development companies in the region by delivering innovative projects that set new standards in quality and sustainability.'
    },
    {
      icon: 'https://www.figma.com/api/mcp/asset/9bf5fae1-fa15-4c91-bd58-4620d362e4c4',
      title: 'VALUES',
      text: 'Transparency, professionalism, and commitment to excellence are the foundations upon which Zenith Developments builds long-term relationships with partners.'
    }
  ];
}
