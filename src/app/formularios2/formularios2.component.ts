import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios2',
  templateUrl: './formularios2.component.html',
  styleUrls: ['./formularios2.component.css']
})
export class Formularios2Component {

  form = new FormGroup({
    name: new FormControl('', [Validators.minLength(4), Validators.required]),
    isChecked: new FormControl(false)
  });

}
