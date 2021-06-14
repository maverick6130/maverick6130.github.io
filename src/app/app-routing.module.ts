import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { InterestsComponent } from './interests/interests.component';
import { ProjectsComponent } from './projects/projects.component';
import { TeachingsComponent } from './teachings/teachings.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'interests', component: InterestsComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'teachings', component: TeachingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
