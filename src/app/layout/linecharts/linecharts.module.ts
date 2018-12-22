import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

import { LineChartsRoutingModule } from './linecharts-routing.module';
import { LineChartsComponent } from './linecharts.component';

@NgModule({
    imports: [
        CommonModule,
        LineChartsRoutingModule,
        Ng2Charts,
        MatCardModule,
        MatGridListModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [LineChartsComponent]
})
export class LineChartsModule {}
