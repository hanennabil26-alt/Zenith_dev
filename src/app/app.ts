import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { MissionComponent } from './components/mission/mission';
import { ServicesComponent } from './components/services/services';
import { ProjectsComponent } from './components/projects/projects';
import { CoverageComponent } from './components/coverage/coverage';
import { LeadershipComponent } from './components/leadership/leadership';
import { ContactComponent } from './components/contact/contact';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    MissionComponent,
    ServicesComponent,
    ProjectsComponent,
    CoverageComponent,
    LeadershipComponent,
    ContactComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
