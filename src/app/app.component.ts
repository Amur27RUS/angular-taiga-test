import {Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: `my-app`,
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.less`],
})
export class AppComponent {

  testForm = new FormGroup({
    testValue: new FormControl(0, Validators.required),
  });
}
