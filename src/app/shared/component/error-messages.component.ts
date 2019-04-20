import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-error-messages',
  template: `<small class="mat-text-warn" *ngIf="errorMessage !== null">{{errorMessage}}</small>`,
  styleUrls: ['./error-messages.component.css']
})
export class ErrorMessagesComponent implements OnInit {

  @Input() control: FormControl;

  constructor() { }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return this.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
    return null;
  }

  getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
    const config = {
      'appPhoneValidate': 'Invalid Phone',
      'appEmailValidate': 'Invalid Email Address',
      'appPasswordValidate': 'Password must containt 8 characters, capital letters, lowercase, numbers and special character.',
      'minlength': `Minimum Length ${validatorValue.requiredLength}`,
      'min': `Minumum Value ${validatorValue.min}`,
      'max': `Maximum Value ${validatorValue.max}`,
      'appEqualvalidate': 'Confirm password does not match.',
    };

    return config[validatorName];
  }

  ngOnInit() {
  }

}
