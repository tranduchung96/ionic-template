import { Component, OnInit } from '@angular/core';
import { FilePath } from '@awesome-cordova-plugins/file-path/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { AlertController, Platform } from '@ionic/angular';
@Component({
  selector: 'app-filepath',
  templateUrl: './filepath.page.html',
  styleUrls: ['./filepath.page.scss'],
})
export class FilepathPage implements OnInit {

  constructor(
    private filepath: FilePath,
    private filechoser: FileChooser,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async onClick() {
    (await this.alertController.create({
      message: await this.filepath.resolveNativePath(await this.filechoser.open())
    })).present();
  }
}
