import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppLauncherPageRoutingModule } from './app-launcher-routing.module';

import { AppLauncherPage } from './app-launcher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppLauncherPageRoutingModule
  ],
  declarations: [AppLauncherPage]
})
export class AppLauncherPageModule {}
