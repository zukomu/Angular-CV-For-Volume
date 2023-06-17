import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './modules/home-screen/home-screen.component';
import { PastJobComponent } from './modules/past-job/past-job.component';
import { EducationComponent } from './modules/education/education.component';


const routes: Routes = [
  {path: 'home', component: HomeScreenComponent},
  {path: 'past-job', component: PastJobComponent},
  {path: 'education', component: EducationComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
