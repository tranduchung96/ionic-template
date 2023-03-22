import { Component, OnInit } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { AlertController } from '@ionic/angular';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';

@Component({
  selector: 'app-file-system',
  templateUrl: './file-system.page.html',
  styleUrls: ['./file-system.page.scss'],
})
export class FileSystemPage implements OnInit {

  constructor(
    private fileChoser: FileChooser,
    private alertController: AlertController
  ) { }

  ngOnInit() {
  }

  async selectFile() {
    const filePath = await this.fileChoser.open();
    (await this.alertController.create({
      message: JSON.stringify({
        filepath: await Filesystem.getUri({
          path: filePath,
          directory: Directory.Documents
        })
      }, null, 2)
    })).present();
  }
}
