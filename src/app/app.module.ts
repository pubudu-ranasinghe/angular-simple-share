import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SimpleShareModule } from 'simple-share';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SimpleShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
