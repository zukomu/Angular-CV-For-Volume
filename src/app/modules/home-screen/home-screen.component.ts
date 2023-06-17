import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackgroundService } from 'src/app/services/background-service/background-service.service';
import { CvReaderService } from 'src/app/services/cv-reader/cv-reader.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss']
})
export class HomeScreenComponent implements OnInit, OnDestroy {

  constructor(public cvReader: CvReaderService, private router: Router, private backgroundService: BackgroundService) { }

  get cv(){
    return this.cvReader.loadedCV
  }

  ngOnInit(): void {
    this.changePicture()
    this.pictureChanger = setInterval(() => {
      this.changePicture();
    }, 5000);
    this.backgroundService.changeBackground("backgroundHome.jpg");
  }
  ngOnDestroy(): void {
    this.backgroundService.changeBackground();
    if (this.pictureChanger){
      clearInterval(this.pictureChanger)
    }
  }

  pictureFolderURL: string = "../../../assets/images/"
  // I wasn't sure how much work I wanted to put into making this easily resuable for another hypothetical person's cv
  // that's why some of this is hardcoded (like the images and descriptions) and some of it is read from the JSON (like the name)
  pictureNames: string[] = ["BlackAndWhiteSpring.jpg", "CowgirlSpring.jpg", "EmoSpring.jpg", "SpringAndPikachu.jpg"]
  pictureDescriptions: string[] = ["a selfie of Spring wearing a trendy black and white outfit", 
    "a selfie showing Spring wearing a My Chemical Romance hoodie and a white cowboy hat", "a selfie of Spring wearing a red and black emo style outfit",
    "a photograph of Spring and her friend posing with someone in a Pikachu mascot outfit"]
  defaultPictureAlt: string = "A series of images of " + this.cv.name + ", currently showing "
  currentPictureIndex = -1
  pictureChanger: any
  changePicture(){
    const fadingImages = document.getElementById("fadingImages") as HTMLImageElement
    this.currentPictureIndex++
    if (this.currentPictureIndex >= this.pictureNames.length) { this.currentPictureIndex = 0 }
    fadingImages.style.backgroundImage = `url(${this.pictureFolderURL + this.pictureNames[this.currentPictureIndex]})`
    fadingImages.alt = `${this.defaultPictureAlt}${this.pictureDescriptions[this.currentPictureIndex]}`
  }

  openJob(id: number){
    this.router.navigate(["/past-job"], { queryParams: {id: id}})
  }
  openEdu(id: number){
    this.router.navigate(["/education"], { queryParams: {id: id}})
  }
}
