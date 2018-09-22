import { Component, Input } from '@angular/core';

import { Errors } from '../../core/models';

@Component({
  selector: 'app-list-errors',
  templateUrl: './list-errors.component.html',
  styleUrls: ['./list-errors.component.css']
})
export class ListErrorsComponent {
  formattedErrors: Array<string> = [];

  @Input()
  set errors(errorList: Errors) {
    this.formattedErrors = [];
    if (!errorList) { return; }
    if (errorList.errors) {
      for (const field in errorList.errors) {
        if (errorList.hasOwnProperty(field)) {
          this.formattedErrors.push(`${field} ${errorList.errors[field]}`);
        }
      }
    }
  }

  get errorList() {
    return this.formattedErrors;
  }

}
