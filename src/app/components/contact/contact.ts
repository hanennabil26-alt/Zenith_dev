import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  gradientImg = 'https://www.figma.com/api/mcp/asset/433b984f-621b-4c93-9f3d-781c4d751e47';
  addressIcon = 'https://www.figma.com/api/mcp/asset/fbbf2333-5fc4-46de-8ac6-977239bccb11';
  phoneIcon = 'https://www.figma.com/api/mcp/asset/d97b8217-2969-4f63-978b-4ed9dd7c1b1b';
  emailIcon = 'https://www.figma.com/api/mcp/asset/36cfa5c3-cde7-40a9-912d-2649b0ea39df';
  arrowIcon = 'https://www.figma.com/api/mcp/asset/6c8f724e-898a-4a25-b776-240d4fc4610e';
  chevronIcon = 'https://www.figma.com/api/mcp/asset/14f657c0-64d6-4489-8c17-b1443ca623f7';

  form = { name: '', phone: '', service: 'Real Estate Investment', message: '' };

  services = ['Real Estate Investment', 'Real Estate Development', 'Construction & Contracting', 'Project Management', 'Architectural Design'];

  onSubmit() { console.log(this.form); }
}
