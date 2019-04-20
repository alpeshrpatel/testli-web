import { LoaderComponent } from './component/loader-component/loader.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { ErrorMessagesComponent } from './component/error-messages.component';
import { PasswordValidator, PhoneValidator, EmailValidator, IsNumberDirective, EqualValidator } from './directives/validator.directive';

import { BidiModule } from '@angular/cdk/bidi';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelSpeed: 2,
    wheelPropagation: true,
    minScrollbarLength: 20
};

import {
    MAT_DIALOG_DEFAULT_OPTIONS,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    MatMenuModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSortModule,
    MatSnackBarModule,
    MatStepperModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
    SnakbarService
} from './service/snakbar.service';
import {
    SharedService
} from './service/shared.service';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientService, httpClientServiceCreator, StorageService } from '.';
import { AuthGuardService } from './service/auth-guard.service';
import { InterceptorService } from './service/interceptor.service';

@NgModule({
    imports: [
        HttpClientModule,
        MatInputModule,
        MatSidenavModule,
        MatCardModule,
        MatMenuModule,
        MatCheckboxModule,
        MatIconModule,
        MatButtonModule,
        MatRadioModule,
        MatToolbarModule,
        MatTabsModule,
        MatListModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatProgressBarModule,
        FlexLayoutModule,
        BidiModule,
        PerfectScrollbarModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSortModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatTooltipModule,
        MatStepperModule,
        MatChipsModule,
        MatRadioModule,
        MatAutocompleteModule,
        MatProgressSpinnerModule
    ],
    declarations: [
        EmailValidator,
        PhoneValidator,
        PasswordValidator,
        EqualValidator,
        IsNumberDirective,
        ErrorMessagesComponent,
        LoaderComponent
    ],
    providers: [
        SharedService,
        StorageService,
        InterceptorService,
        SnakbarService,
        AuthGuardService,
        {
            provide: PERFECT_SCROLLBAR_CONFIG,
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        {
            provide: MAT_DIALOG_DEFAULT_OPTIONS,
            useValue: { hasBackdrop: true }
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorService,
            multi: true
        },
        {
            provide: HttpClientService,
            useFactory: httpClientServiceCreator,
            deps: [HttpClient]
        }
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        LayoutModule,
        CommonModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatSidenavModule,
        MatCardModule,
        MatRadioModule,
        MatMenuModule,
        MatCheckboxModule,
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatTabsModule,
        MatListModule,
        MatSlideToggleModule,
        MatSelectModule,
        MatProgressBarModule,
        FlexLayoutModule,
        BidiModule,
        PerfectScrollbarModule,
        MatDialogModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSortModule,
        MatTooltipModule,
        MatTooltipModule,
        MatStepperModule,
        MatChipsModule,
        MatRadioModule,
        MatAutocompleteModule,
        EmailValidator,
        PhoneValidator,
        PasswordValidator,
        EqualValidator,
        IsNumberDirective,
        ErrorMessagesComponent,
        LoaderComponent,
        MatProgressSpinnerModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SharedModule { }
