import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  isMenuOpen: boolean = false;
  isSearchOpen: boolean = false; 
  slides = [1, 2, 3];
  public showAllImages: boolean = false;

  @ViewChild('ofertaSectionRef') ofertaSectionRef!: ElementRef;
  public displayedImages: any = [];

  public _album: any = []; 
  constructor(private router: Router, config: NgbCarouselConfig, private _lightbox: Lightbox )
  {
     const images = ['gal1', 'gal2', 'gal3', 'gal4', 'gal5', 'gal6', 'gal7', 'gal8', 'gal9', 'gal10', 'gal11'].map(imgName => ({
      src: `assets/gallery/${imgName}.png`,
      caption: imgName,
      thumb: `assets/gallery/${imgName}.png`
    }));

    this._album = images;
  }

  ngOnInit(): void {
    this.calculateImageDisplay();
   }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openSearch(): void {
    this.isSearchOpen = !this.isSearchOpen;
  }
  scroll(target: string) {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  open(index: number): void {
    this._lightbox.open(this._album, index);
  }
  toggleImageDisplay(): void {
    this.showAllImages = !this.showAllImages;
    console.log('Show all images:', this.showAllImages);
    this.calculateImageDisplay();
  }
  calculateImageDisplay(): void {
    const numImagesToDisplay = this.showAllImages ? this._album.length : Math.ceil(this._album.length / 2);
    console.log('Num images to display:', numImagesToDisplay);
    this.displayedImages = this._album.slice(0, numImagesToDisplay);
  }

}
