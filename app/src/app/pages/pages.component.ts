import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  isMenuOpen: boolean = false;
  isSearchOpen: boolean = false; 

  constructor() { }

  ngOnInit(): void { }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  openSearch(): void {
    this.isSearchOpen = !this.isSearchOpen;
  }

}
