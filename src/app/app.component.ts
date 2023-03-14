import { Component, OnInit, Optional } from '@angular/core';
import { App } from '@capacitor/app';
import { IonRouterOutlet, Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Camera', url: '/camera', icon: 'camera' },
    { title: 'App Launcher', url: '/app-launcher', icon: 'arrow-redo' },
    { title: 'App', url: '/app', icon: 'apps' },
    { title: 'Browser', url: '/browser', icon: 'browsers' },
    { title: 'Iframe', url: '/iframe', icon: 'browsers' },

  ];
  constructor(
    private platform: Platform,
    @Optional() private routerOutlet: IonRouterOutlet
  ) { }
  ngOnInit(): void {
    this.platform.backButton.subscribeWithPriority(-1, () => {
      if (!this.routerOutlet.canGoBack()) {
        App.minimizeApp();
      }
    });
    this.platform.backButton.subscribeWithPriority(10, () => {
      console.log('Handler was called!');
    });
  }


}
