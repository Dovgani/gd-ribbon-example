import { FormsModule    } from '@angular/forms';
import { BrowserModule  } from '@angular/platform-browser';
import { NgModule       } from '@angular/core';
import { CommonModule   } from '@angular/common'; 

import { GDWindowModule } from 'gd-window';
import { GDRibbonModule } from 'gd-ribbon';

import { AppComponent   } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,

    GDRibbonModule,
    GDWindowModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
