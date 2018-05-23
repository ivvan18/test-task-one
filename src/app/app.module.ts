import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';


@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    Section2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
