import { Component, NgZone, OnInit } from '@angular/core';
import { App, } from '@capacitor/app';

@Component({
  selector: 'app-app',
  templateUrl: './app.page.html',
  styleUrls: ['./app.page.scss'],
})
export class AppPage implements OnInit {

  constructor(
    private ngZone: NgZone
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // App.addListener("appStateChange",(state)=>{
    //   this.ngZone.run((state)=>{
    //     alert(state)

    //   });
    // })
  }
  exitApp() {
    this.ngZone.run(() => {
      App.exitApp();
    });
  }
  getInfo() {
    this.ngZone.run(async () => {
      alert(JSON.stringify(await App.getInfo(), null, 2));
    });
  }

  getState() {
    this.ngZone.run(async () => {
      alert(JSON.stringify(await App.getState(), null, 2));
    });
  }

  getLaunchUrl() {
    this.ngZone.run(async () => {
      alert(JSON.stringify(await App.getLaunchUrl(), null, 2));
    });
  }
  minimizeApp() {
    this.ngZone.run(async () => {
      App.minimizeApp();

    });
  }
}
