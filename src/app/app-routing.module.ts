import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import("./pages/home/home.module").then(m => m.HomePageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/camera/camera.module').then(m => m.CameraPageModule)
  },
  {
    path: 'app-launcher',
    loadChildren: () => import('./pages/app-launcher/app-launcher.module').then(m => m.AppLauncherPageModule)
  },
  {
    path: 'app',
    loadChildren: () => import('./pages/app/app.module').then(m => m.AppPageModule)
  },
  {
    path: 'browser',
    loadChildren: () => import('./pages/browser/browser.module').then(m => m.BrowserPageModule)
  },
  {
    path: 'iframe',
    loadChildren: () => import('./pages/iframe/iframe.module').then(m => m.IframePageModule)
  },
  {
    path: 'clipboard',
    loadChildren: () => import('./pages/clipboard/clipboard.module').then(m => m.ClipboardPageModule)
  },
  {
    path: 'file-system',
    loadChildren: () => import('./pages/file-system/file-system.module').then(m => m.FileSystemPageModule)
  },
  {
    path: 'filepath',
    loadChildren: () => import('./pages/filepath/filepath.module').then(m => m.FilepathPageModule)
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'

  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
