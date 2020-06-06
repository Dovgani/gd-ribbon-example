import { FormsModule               } from '@angular/forms';
import { BrowserModule             } from '@angular/platform-browser';
import { NgModule                  } from '@angular/core';
import { HttpClientModule          } from '@angular/common/http';

import { CommonModule              } from '@angular/common'; 

import { GDCanvasModule            } from 'gd-canvas';
import { GDCanvasWrapperModule     } from 'gd-canvas-wrapper';
import { GDCanvasCustomTypesModule } from 'gd-canvas-custom-types';
import { GDPGModule                } from 'gd-pg';
import { GDAccordionModule         } from 'gd-accordion';
import { GDNumberEditorModule      } from 'gd-numbereditor';
import { GDWindowModule            } from 'gd-window';
import { GDRibbonModule            } from 'gd-ribbon';
import { GDTooltipModule           } from 'gd-tooltip';
import { GDSplitterModule          } from 'gd-splitter';
import { GDContextmenuModule       } from 'gd-contextmenu';

import { AppComponent              } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    CommonModule,

    GDCanvasModule,
    GDCanvasWrapperModule,
    GDRibbonModule,
    GDPGModule,
    GDAccordionModule,
    GDNumberEditorModule,
    GDWindowModule,
    GDSplitterModule,
    GDCanvasCustomTypesModule,
    GDContextmenuModule,
    GDTooltipModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
