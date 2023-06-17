import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeScreenComponent } from './modules/home-screen/home-screen.component';
import { PhoneNumberPipe } from './store/pipes/phone-number.pipe';
import { EducationComponent } from './modules/education/education.component';
import { PastJobComponent } from './modules/past-job/past-job.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    PhoneNumberPipe,
    EducationComponent,
    PastJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
