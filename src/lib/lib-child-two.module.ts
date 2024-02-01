import { NgModule } from '@angular/core';
import { LibChildTwoComponent } from './lib-child-two.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LibChildTwoComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    LibChildTwoComponent
  ]
})
export class LibChildTwoModule { }
