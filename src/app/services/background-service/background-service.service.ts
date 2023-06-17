import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  constructor() {
    document.body.style.backgroundPosition = "center center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "cover"; 
  }
  imagesFolderUrl: string = "url('../../../assets/images/"
  changeBackground(backgroundUrl?: string){
    if (backgroundUrl){
      document.body.style.backgroundImage = `${this.imagesFolderUrl}${backgroundUrl}')`;
    }
    else {
      document.body.style.backgroundImage = "none";
    }
  }
}
