import { Component, NgZone, OnInit } from '@angular/core';
import { Clipboard } from '@capacitor/clipboard';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-clipboard',
  templateUrl: './clipboard.page.html',
  styleUrls: ['./clipboard.page.scss'],
})
export class ClipboardPage implements OnInit {

  input = '';
  output = '';
  constructor(
    private ngZone: NgZone,
    private toastController: ToastController
  ) { }

  ngOnInit() {
  }

  async copy() {
    if (this.input.trim().localeCompare('') === 0) {
      this.toast("Emty input !!!")
      return;
    }

    this.ngZone.runTask(async () => {
      await Clipboard.write({
        string: this.input
      });

      this.toast("Copy success !")
    });
  }
  async paste(){
    this.ngZone.runTask(async () => {
      const text = await Clipboard.read();
      this.output = text.value;
      this.toast("Paste success !")
    });
  }
  async toast(message: string) {
    (await this.toastController.create({
      message: message,
      duration: 2000
    })).present();
  }

  

}
