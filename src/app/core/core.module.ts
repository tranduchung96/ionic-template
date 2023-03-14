import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import components below




const componets:[] = [];

@NgModule({
  declarations: [
    ...componets
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...componets
  ]
})
export class CoreModule { }
