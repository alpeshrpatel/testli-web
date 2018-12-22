import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { LineChartsModule } from '../linecharts/linecharts.module';
import { BarChartsModule } from '../barcharts/barcharts.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, Ng2Charts, MatCardModule, MatGridListModule, 
    LineChartsModule, BarChartsModule]
})
export class ChartsModule {}
