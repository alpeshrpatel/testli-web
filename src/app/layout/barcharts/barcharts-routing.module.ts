import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BarChartsComponent } from './barcharts.component';

const routes: Routes = [
    {
        path: '/barcharts',
        component: BarChartsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BarChartsRoutingModule {}
