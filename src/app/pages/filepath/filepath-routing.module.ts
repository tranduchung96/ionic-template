import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilepathPage } from './filepath.page';

const routes: Routes = [
  {
    path: '',
    component: FilepathPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilepathPageRoutingModule {}
