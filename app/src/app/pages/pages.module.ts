import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMasonryModule } from 'ngx-masonry';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
  ],


  imports: [
    PagesRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgbModule,
    NgxMasonryModule
  ],

  bootstrap: [PagesComponent],
})
export class PagesModule {}
