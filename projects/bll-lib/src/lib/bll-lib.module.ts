import { NgModule } from '@angular/core';
import { BllLibComponent } from './bll-lib.component';
import { UiLibModule } from 'ui-lib';


@NgModule({
  declarations: [BllLibComponent],
  imports: [
    UiLibModule
  ],
  exports: [BllLibComponent]
})
export class BllLibModule { }
