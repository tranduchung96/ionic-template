import { Component, NgZone, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActionSheetController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {

  imageUrl = '';
  constructor(
    private ngZone: NgZone,
    private actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {

  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Take Photo',
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: 'Get from Galley',
          handler: () => {
            this.getFormGallery();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

  }

  async takePicture() {
    this.ngZone.runTask(async () => {
      const image = await Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        saveToGallery: true,
        width: 1024,
        height: 1024,
        source: CameraSource.Camera,
        resultType: CameraResultType.Uri
      });
      this.imageUrl = image.webPath || '';

    });

  };
  async getFormGallery() {
    this.ngZone.runTask(async () => {
      const galleryPhotos = await Camera.pickImages({
        quality: 100,
        width: 1024,
        height: 1024,
        limit: 1
      });
      this.imageUrl = galleryPhotos && galleryPhotos.photos? galleryPhotos.photos[0].webPath || '' : '';
    });

  };
}
