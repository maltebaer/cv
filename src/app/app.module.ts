import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { HeroHome, HeroMail, HeroCake, HeroQuestionMarkCircle, HeroGlobeAlt, HeroOfficeBuilding, HeroPuzzle, HeroNewspaper, HeroGift } from '@ng-icons/heroicons/outline';

import { AppComponent } from './app.component';
import { MeComponent } from './me/me.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    MeComponent,
    ProjectsComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ HeroHome, HeroMail, HeroCake, HeroQuestionMarkCircle, HeroGlobeAlt, HeroOfficeBuilding, HeroPuzzle, HeroNewspaper, HeroGift })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
