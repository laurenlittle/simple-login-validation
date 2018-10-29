import { Component, OnInit } from '@angular/core';

import {User} from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  user = new User('', '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }
}
