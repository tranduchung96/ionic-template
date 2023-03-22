import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClipboardPageRoutingModule } from './clipboard-routing.module';

import { ClipboardPage } from './clipboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClipboardPageRoutingModule
  ],
  declarations: [ClipboardPage]
})
export class ClipboardPageModule {}
