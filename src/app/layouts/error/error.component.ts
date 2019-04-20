import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html'
})

export class ErrorComponent implements OnInit {
    constructor(public router: Router, private location: Location) { }

    ngOnInit() {
    }

    goBack() {
        this.location.back();
    }
}
