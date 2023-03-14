import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BrowserPage } from './browser.page';

const routes: Routes = [
  {
    path: '',
    component: BrowserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowserPageRoutingModule {}
