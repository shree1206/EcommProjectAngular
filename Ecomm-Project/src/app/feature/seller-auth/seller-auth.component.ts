import { Component, OnInit } from '@angular/core';
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
export class SellerAuthComponent implements OnInit {

  fisrtName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  signupForm: FormGroup;
  submitted: boolean = false;
  constructor(private _fb: FormBuilder, private _seller: SellerService, private _toastr: ToastrService, private _route: Router) {
    this.signupForm = this._fb.group({
      id: [0],
      fname: ['', Validators.compose([Validators.required])],
      lname: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
    })
  }

  ngOnInit() { }

  get f() {
    return this.signupForm.controls;
  }

  postdata(data: signupUser): void {
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    this._seller.userSignup(data).subscribe((res: any) => {
      if (res) {
        this._toastr.success('Successfull Event Done', 'Success');
        Swal.fire('Successfully Data Saved')
        this.reset();
        this._route.navigate(['seller-home']);
      }
    })
  }

  async reset() {
    this.submitted = false;
    this.signupForm.reset();
  }
}