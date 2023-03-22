import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FileSystemPage } from './file-system.page';

const routes: Routes = [
  {
    path: '',
    component: FileSystemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FileSystemPageRoutingModule {}
