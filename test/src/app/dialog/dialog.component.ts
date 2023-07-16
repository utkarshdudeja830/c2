import { Component, Inject, Input, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';
import { CommonModule } from '@angular/common';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-bootstrap/carousel';




@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],

})
export class DialogComponent implements OnInit{

  // @Input() galleryData: Item[] = [];
  constructor(){}
  ngOnInit(): void {
   
  }
  
    slides = [ "../../assets/sjn.jpg","../../assets/de.jpg"];
    activeIndex = 0;

  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      dots:false,
      navSpeed: 700,
      autoplay:true,
      // navText: ["<div class='nav-button owl-prev'></div>", "<div class='nav-button owl-next'></div>"],
     //  dots:true,
      autoplayHoverPause:true,
   
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        740: {
          items: 2
        },
        940: {
          items: 2
        }
      },
    nav: false

    
    }

    onCarouselInitialized(event: any) {
      event.owl.update();
    }
  
    onSlideChange(event: any) {
      this.activeIndex = event.item.index;
    }
  
    onDotClick(index: number) {
      this.activeIndex = index;
    }


  // previousImage():void{

  

  // }
  // nextImage():void{

    

  // }

//   getCurrentSlideUrl():string{
  
//   return `url('${this.slides[this.currentIndex].url}')`

// }
}



  //  customOptions: OwlOptions = {
  //    loop: true,
  //    mouseDrag: true,
  //    touchDrag: true,
  //    pullDrag: true,
  //    dots:false,
  //    navSpeed: 700,
  //    autoplay:true,
  //   //  navText:["←","→"],
  //   //  dots:true,
  //    autoplayHoverPause:true,
     
  //    responsive: {
  //      0: {
  //        items: 1
  //      },
  //      400: {
  //        items: 1
  //      },
  //      740: {
  //        items: 2
  //      },
  //      940: {
  //        items: 2
  //      }
  //    },
  //  nav: false
  

  
  // currentImageIndex: number = 0;

  // nextImage() {
  //   if (this.currentImageIndex < this.images.length - 1) {
  //     this.currentImageIndex++;
  //   } else {
  //     this.currentImageIndex = 0; // Start from the first image if we reach the end of the array
  //   }
  // }

  // previousImage() {
  //   if (this.currentImageIndex > 0) {
  //     this.currentImageIndex--;
  //   } else {
  //     this.currentImageIndex = this.images.length - 1; // Go to the last image if we reach the beginning of the array
  //   }
  // }


  //  constructor(private dialogRef: MatDialogRef<DialogComponent>){}
 

  // images: string[] = [
  //   '../../assets/de.jpg',
 
  //   '../../assets/sjn.jpeg'
  // ];



  // close() {
  //   this.dialogRef.close(true);
  // }


