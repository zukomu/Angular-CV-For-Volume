import { Component, OnInit } from '@angular/core';
import { CvReaderService } from './services/cv-reader/cv-reader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-cv';
  constructor(public cvReader: CvReaderService, private router: Router) { }

  goHome(){
    this.router.navigate(["/home"])
  }
}
