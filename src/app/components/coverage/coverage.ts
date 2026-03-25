import { Component } from '@angular/core';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.html',
  styleUrl: './coverage.scss'
})
export class CoverageComponent {
  mapImg = 'https://www.figma.com/api/mcp/asset/280c806f-3122-4098-b94d-724bdad0b0fc';

  locations = [
    { num: '01', name: 'Tulip Al-Tagamoa' },
    { num: '02', name: 'North House' },
    { num: '03', name: 'North Coast' },
  ];
}
