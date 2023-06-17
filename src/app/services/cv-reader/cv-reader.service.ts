import { Injectable } from '@angular/core';
import data from "../../store/data/JsonCV.json"
import { ICV } from 'src/app/store/model/ICV';
import { PastJob } from 'src/app/store/model/PastJob';
import { Education } from 'src/app/store/model/Education';

@Injectable({
  providedIn: 'root'
})
export class CvReaderService {
  loadedCV: ICV = data
  pastJobs: PastJob[]
  educations: Education[]
  constructor() {
    this.pastJobs = this.loadedCV.pastJobs.map((a, i) => new PastJob(a, i))
    this.educations = this.loadedCV.education.map((a, i) => new Education(a, i))
   }

}
