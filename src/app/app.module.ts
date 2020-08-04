import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftSideNavComponent } from './left-side-nav/left-side-nav.component';
import { EducationComponent } from './left-side-nav/education/education.component';
import { ExperienceComponent } from './left-side-nav/experience/experience.component';
import { ProjectsComponent } from './left-side-nav/projects/projects.component';
import { CertificationsComponent } from './left-side-nav/certifications/certifications.component';
import { SkillsComponent } from './left-side-nav/skills/skills.component';
import { ContactComponent } from './left-side-nav/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftSideNavComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    CertificationsComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
