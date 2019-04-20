import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutsModule } from './layouts/layouts.module';
import { SharedModule } from './shared/shared.module';
import { MainComponent } from './layouts/main/main.component';
import { Ng2Webstorage } from 'ngx-webstorage';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    Ng2Webstorage.forRoot({ prefix: 'SFL-AURA', separator: '-' }),
    AppRoutingModule,
    SharedModule,
    LayoutsModule
  ],
  providers: [
  ],
  bootstrap: [
    MainComponent
  ],
})
export class AppModule { }
