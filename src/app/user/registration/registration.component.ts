import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/shared/user.service.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  
  constructor(public userService: UserServiceService,
              private formBuilder: FormBuilder,
              private router: Router) {

              }

  ngOnInit(): void {
    this.userService.formModel.reset;
  }

  onSubmit(){
    console.log('Hello World');
    this.userService.register().subscribe((res: any) => {
      if(res.succeeded){
        this.userService.formModel.reset;
        this.router.navigateByUrl('user/login');
      }
    }, (err: any) => {
      console.log(err);
    })
  }

}
