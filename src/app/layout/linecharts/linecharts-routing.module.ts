import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LineChartsComponent } from './linecharts.component';

const routes: Routes = [
    {
        path: '/linecharts',
        component: LineChartsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LineChartsRoutingModule {}
