import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';


@Component({
  selector: 'app-browser',
  templateUrl: './browser.page.html',
  styleUrls: ['./browser.page.scss'],
})
export class BrowserPage implements OnInit {

  constructor() { }

  ngOnInit() {
    Browser.addListener("browserPageLoaded", () => {
      // alert("Browser loaded");
    });
    Browser.addListener("browserFinished", () => {
      // alert("Browser Finished");
    });
  }

  async openCapacitorSite() {
    await Browser.open({ url: 'http://capacitorjs.com/', presentationStyle: "fullscreen" });
    

  };

}
