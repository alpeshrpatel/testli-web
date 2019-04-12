import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCheckboxModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { RegisterService } from './register.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CustomFormsModule,
        RegisterRoutingModule,
        MatInputModule,
        MatCheckboxModule,
        MatButtonModule,
        SharedModule,
        FlexLayoutModule.withConfig({ addFlexToParent: false })
    ],
    providers: [
        RegisterService
    ],
    declarations: [RegisterComponent]
})
export class RegisterModule { }
