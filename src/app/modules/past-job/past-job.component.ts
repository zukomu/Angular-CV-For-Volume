import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackgroundService } from 'src/app/services/background-service/background-service.service';
import { CvReaderService } from 'src/app/services/cv-reader/cv-reader.service';
import { PastJob } from 'src/app/store/model/PastJob';

@Component({
  selector: 'app-past-job',
  templateUrl: './past-job.component.html',
  styleUrls: ['./past-job.component.scss']
})
export class PastJobComponent implements OnInit, OnDestroy {

  constructor(public cvReader: CvReaderService, private route: ActivatedRoute, private backgroundService: BackgroundService) { }

  job: PastJob

  ngOnInit(): void {
    this.getPastJob();
    this.backgroundService.changeBackground("backgroundWork.jpg");
  }
  ngOnDestroy(): void {
    this.backgroundService.changeBackground();
  }

  getPastJob(){
    this.job = this.cvReader.pastJobs.find(a => a.id == this.route.snapshot.queryParams["id"])
  }

}
