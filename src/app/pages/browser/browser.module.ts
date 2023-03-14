import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BrowserPageRoutingModule } from './browser-routing.module';

import { BrowserPage } from './browser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserPageRoutingModule
  ],
  declarations: [BrowserPage]
})
export class BrowserPageModule {}
