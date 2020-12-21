import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  readonly baseUri = 'http://localhost:5000/api';
  constructor(private formBuilder: FormBuilder,
              private http: HttpClient) { }

  formModel = this.formBuilder.group({
    Username : ['', Validators.required],
    Email : ['', Validators.email],
    Password : ['', [Validators.required, Validators.maxLength(6)]],
    ConfirmPassword : ['', Validators.required]
  }, { validator: this.comparePasswords });

  comparePasswords(formGroup: FormGroup){
    let confirmPasswordControl = formGroup.get('ConfirmPassword');
    if(formGroup.get('Password').value === formGroup.get('ConfirmPassword'))
      confirmPasswordControl.setErrors(null);
    else
      confirmPasswordControl.setErrors({passwordMismatch: true});
  }

  register(){
    var body = {
      Username: this.formModel.value.Username,
      Email: this.formModel.value.Email,
      Password: this.formModel.value.Password,
      ConfirmPassword: this.formModel.value.ConfirmPassword,
    }
    return this.http.post(`${this.baseUri}/ApplicationUser/Register`, body);
  }

  login(userInformation){
    return this.http.post(`${this.baseUri}/ApplicationUser/Login`, userInformation);
  }

  getUserProfileInformation(){
    const token = localStorage.getItem('Token');
    const tokenHeader = new HttpHeaders({'Authorization' : `Bearer ${token}`});
    return this.http.get(`${this.baseUri}/UserProfile`, {headers: tokenHeader});
  }
}
