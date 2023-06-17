import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackgroundService } from 'src/app/services/background-service/background-service.service';
import { CvReaderService } from 'src/app/services/cv-reader/cv-reader.service';
import { Education } from 'src/app/store/model/Education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit, OnDestroy {

  constructor(public cvReader: CvReaderService, private route: ActivatedRoute, private backgroundService: BackgroundService) { }

  education: Education

  ngOnInit(): void {
    this.getEducation()
    this.backgroundService.changeBackground("backgroundEdu.jpg");
  }
  ngOnDestroy(): void {
    this.backgroundService.changeBackground();
  }

  getEducation(){
    this.education = this.cvReader.educations.find(a => a.id == this.route.snapshot.queryParams["id"])
  }

}
