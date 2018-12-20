import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BllLibModule } from 'bll-lib';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BllLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
