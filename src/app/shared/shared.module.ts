import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientService, httpClientServiceCreator } from './services';
import { NgModule } from '@angular/core';
import { AuthInterceptor } from './guard/auth.interceptor';

@NgModule({
    imports: [
    ],
    exports: [
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        {
            provide: HttpClientService,
            useFactory: httpClientServiceCreator,
            deps: [HttpClient]
        }
    ]
})

export class SharedModule { }
