import { NgModule } from '@angular/core';
import { SimpleShareComponent } from './simple-share.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [SimpleShareComponent],
  exports: [SimpleShareComponent]
})
export class SimpleShareModule { }
