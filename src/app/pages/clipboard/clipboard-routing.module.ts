import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClipboardPage } from './clipboard.page';

const routes: Routes = [
  {
    path: '',
    component: ClipboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClipboardPageRoutingModule {}
