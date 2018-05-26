import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { CookieService } from 'ngx-cookie-service';

import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loginForm: FormGroup;

  hide = true;
  isUserAvailable = false;

  constructor(private formBuilder: FormBuilder, private cookieService: CookieService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', Validators.required],
    });

    let isUserAvailable = this.cookieService.get('isUserAvailable');
    if (isUserAvailable != undefined && isUserAvailable.length != 0) {
      this.isUserAvailable = true;
    } else {
      this.isUserAvailable = false;
      this.cookieService.delete('isUserAvailable');
    }
  }

  onSubmit() {
    if ((this.loginForm.value.userName != undefined && this.loginForm.value.userName.length != 0) && (this.loginForm.value.password != undefined && this.loginForm.value.password.length != 0)) {
      if (this.loginForm.value.userName == "demo" && this.loginForm.value.password == "demo54321") {
        this.isUserAvailable = true;
        this.cookieService.set('isUserAvailable', '1');
      }
    }
  }

  signout() {
    this.isUserAvailable = false;
    this.cookieService.delete('isUserAvailable');
    window.location.href = environment.BASE_HREF;
  }
}