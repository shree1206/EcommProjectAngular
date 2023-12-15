import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { signupUser } from 'src/app/types/signupUser.interface';
import { SellerService } from './services/seller.service';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css'],
  preserveWhitespaces: true
})
export class SellerAuthComponent implements OnInit, OnDestroy {

  fisrtName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  signupForm: FormGroup;
  loginForm: FormGroup;
  submitted: boolean = false;

  isloggedIn: boolean = false;
  showLoginSection: boolean = false;

  constructor(private _fb: FormBuilder, private _seller: SellerService, private _toastr: ToastrService, private _route: Router) {
    this.signupForm = this._fb.group({
      id: [0],
      fname: ['', Validators.compose([Validators.required])],
      lname: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });

    this.loginForm = this._fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    });

    this._seller.getValue().subscribe((res) => {
      this.isloggedIn = res;
    });
  }

  ngOnInit() {
    console.log(this.isloggedIn);
    this._seller.checkLoogedInUser();
  }

  get f() {
    return this.signupForm.controls;
  }

  get f2() {
    return this.loginForm.controls;
  }

  postdata(data: signupUser): void {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    this._seller.userSignup(data).subscribe((res: any) => {
      if (res) {
        this._seller.setValue(true);
        this._toastr.success('Successfull Event Done', 'Success');
        Swal.fire('Successfully Data Saved')
        this.reset();
        localStorage.setItem('seller', JSON.stringify(res.body));
        this._route.navigate(['seller-home']);
      }
    }, error => {
      this._toastr.error(error.message, 'Error');
    })
  }

  async reset() {
    this.submitted = false;
    this.signupForm.reset();
    this.loginForm.reset();
  }

  loginUser(data: signupUser): void {
    this.submitted = true;
  }

  showLogin() {
    this.showLoginSection = true;
    this.submitted = false;
  }

  closeLogin() {
    this.showLoginSection = false;
    this.submitted = false;
  }

  ngOnDestroy(): void {
    this.submitted = false;
  }
}