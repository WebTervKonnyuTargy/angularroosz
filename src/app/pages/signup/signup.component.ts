import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { RouterModule, Routes} from '@angular/router';
import {Router} from '@angular/router';
import {User} from '../../shared/models/User';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
  });

  constructor(private location: Location, private authService: AuthService,private router: Router,private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    this.authService.signup(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value).then(cred => {
      console.log(cred);
      const user: User={
        email: this.signUpForm.get('email')?.value,
        name: this.signUpForm.get('name')?.value,
        address: this.signUpForm.get('address')?.value,
        phone: this.signUpForm.get('phone')?.value,
      };
      this.userService.create(user);
      this.router.navigate(['/login']);
    }).catch(error => {
      console.error(error);
    });
  }

  goBack() {
    this.location.back();
  }

}
