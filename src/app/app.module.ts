import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { LightboxModule } from 'primeng/lightbox';
import { DragDropModule } from 'primeng/dragdrop';
import { AccordionModule } from 'primeng/accordion';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { TimelineComponent } from './timeline/timeline.component';
import { CardComponent } from './card/card.component';
import { HandplayerComponent } from './handplayer/handplayer.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, ButtonModule, LightboxModule, AccordionModule, DragDropModule ],
  declarations: [ AppComponent, MenubarComponent, TimelineComponent, CardComponent, HandplayerComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
