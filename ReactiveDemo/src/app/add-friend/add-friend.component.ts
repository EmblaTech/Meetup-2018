import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Custome } from './custome';

@Component({
  selector: 'app-add-friend',
  templateUrl: './add-friend.component.html',
  styles: ['input.ng-invalid.ng-touched{border-color: red}']
})
export class AddFriendComponent implements OnInit {
  public addFriendForm: FormGroup;



  constructor(fb: FormBuilder) {
    this.addFriendForm = fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required, Custome.unique],
      ageGroup: [null],
      place: null
    });
  }

  get name() {
    return this.addFriendForm.get('name') as FormControl;
  }

  get email() {
    return this.addFriendForm.get('email') as FormControl;
  }

  send() {
    console.log(this.addFriendForm.value);
    // throw new Error('new example error');
  }

  reset() {
    this.addFriendForm.reset();
  }

  ngOnInit() {
  }

}
