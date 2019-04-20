import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonModuleRoutingModule } from './common-module-routing.module';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [ChartComponent],
  imports: [
    CommonModule,
    CommonModuleRoutingModule
  ]
})
export class CommonModuleModule { }
