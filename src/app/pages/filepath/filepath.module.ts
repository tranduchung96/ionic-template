import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FilepathPageRoutingModule } from './filepath-routing.module';

import { FilepathPage } from './filepath.page';
import { FilePath } from '@awesome-cordova-plugins/file-path/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilepathPageRoutingModule
  ],
  declarations: [FilepathPage],
  providers: [
    FilePath,
    FileChooser
  ]
})
export class FilepathPageModule { }
