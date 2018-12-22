import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { BarChartsRoutingModule } from './barcharts-routing.module';
import { BarChartsComponent } from '../barcharts/barcharts.component';

@NgModule({
    imports: [
        CommonModule,
        BarChartsRoutingModule,
        Ng2Charts,
        MatCardModule,
        MatGridListModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [BarChartsComponent]
})
export class BarChartsModule {}
