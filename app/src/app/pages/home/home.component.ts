import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  isMenuOpen: boolean = false;
  isSearchOpen: boolean = false; 
  slides = [1, 2, 3];

  @ViewChild('ofertaSectionRef') ofertaSectionRef!: ElementRef;

  constructor(private router: Router, config: NgbCarouselConfig) {}

  ngOnInit(): void { }

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
}
