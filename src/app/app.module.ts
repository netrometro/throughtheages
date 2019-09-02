import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ButtonModule ],
  declarations: [ AppComponent, MenubarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
