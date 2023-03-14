import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppLauncherPage } from './app-launcher.page';

const routes: Routes = [
  {
    path: '',
    component: AppLauncherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppLauncherPageRoutingModule {}
