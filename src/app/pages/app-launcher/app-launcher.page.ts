import { Component, NgZone, OnInit } from '@angular/core';
import { AppLauncher } from '@capacitor/app-launcher';

@Component({
  selector: 'app-app-launcher',
  templateUrl: './app-launcher.page.html',
  styleUrls: ['./app-launcher.page.scss'],
})
export class AppLauncherPage implements OnInit {

  url: string = "";
  constructor(
    private ngZone: NgZone
  ) { }

  ngOnInit() {
  }

  async openFacebook() {
    const facebookPackage = 'com.facebook.katana';

    const canOpenFb = await this.canOpenUrl(facebookPackage);
    if (!canOpenFb.value) {
      alert("Facebook not yet install");
      return;
    }
    if (canOpenFb.value) {
      this.ngZone.runTask(() => {
        AppLauncher.openUrl({ url: facebookPackage });
      });
    }
  }
  async openZalo() {
    const zaloPackage = 'com.zing.zalo';

    const canOpenFb = await this.canOpenUrl(zaloPackage);
    if (!canOpenFb.value) {
      alert("Zalo not yet install");
      return;
    }
    if (canOpenFb.value) {
      this.ngZone.runTask(() => {
        AppLauncher.openUrl({ url: zaloPackage });
      });
    }
  }
  async canOpenUrl(url: string) {
    return this.ngZone.runTask(async () => {
      return AppLauncher.canOpenUrl({ url: url })
    });
  }

  async opeApp() {


    const canOpenFb = await this.canOpenUrl(this.url);
    if (!canOpenFb.value) {
      alert("App not yet install");
      return;
    }
    if (canOpenFb.value) {
      this.ngZone.runTask(() => {
        AppLauncher.openUrl({ url: this.url });
      });
    }
  }
}
