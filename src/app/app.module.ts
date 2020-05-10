import { CustomHttpService } from './services/custom-http.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HttpClientJsonpModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { RequestService } from './services/request.service';
import { NewsComponent } from './components/news/news.component';
import { HttpClient } from 'selenium-webdriver/http';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule

  ],
  providers: [
    RequestService,
    CustomHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
