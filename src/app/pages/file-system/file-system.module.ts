import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FileSystemPageRoutingModule } from './file-system-routing.module';

import { FileSystemPage } from './file-system.page';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FileSystemPageRoutingModule
  ],
  declarations: [FileSystemPage],
  providers: [
    FileChooser
  ]
})
export class FileSystemPageModule {}
