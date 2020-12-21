import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/shared/user.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formModel;
  constructor(public formBuilder: FormBuilder,
              private userService: UserServiceService,
              private router: Router) {
    this.formModel = this.formBuilder.group({
      Username: '',
      Password: ''
    });
   }

  ngOnInit(): void {
    if(localStorage.getItem('Token')){
      this.router.navigateByUrl('home');
    }
  }

  onSubmit(){
    const userInformation = {
      Username: this.formModel.Username,
      Password: this.formModel.Password
    }
    this.userService.login(userInformation).subscribe((res: any) => {
      console.log(res);
      localStorage.setItem('Token', res.token);
      this.router.navigateByUrl('home');
    },(err: any) =>{
      console.log(err);
    });
  }

}
