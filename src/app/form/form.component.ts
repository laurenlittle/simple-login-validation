import { Component, OnInit } from '@angular/core';

import {User} from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  submitted = false;
  user = new User('', '', '');
  currentDate = new Date();

  month: number = this.currentDate.getMonth() + 1;
  day: number = this.currentDate.getDate();
  year: number = this.currentDate.getFullYear();
  futureDate: string = `${this.year}-${this.month}-${this.day}`;

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() { this.submitted = true; }
}