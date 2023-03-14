import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IframePage } from './iframe.page';

const routes: Routes = [
  {
    path: '',
    component: IframePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IframePageRoutingModule {}
