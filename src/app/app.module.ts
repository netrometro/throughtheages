import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { TimelineComponent } from './timeline/timeline.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, ButtonModule, AccordionModule ],
  declarations: [ AppComponent, MenubarComponent, TimelineComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
