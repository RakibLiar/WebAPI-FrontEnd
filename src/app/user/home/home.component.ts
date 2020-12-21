import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/shared/user.service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserServiceService,
              private router: Router) { }
  userProfileInformation: any;
  ngOnInit(): void {
    this.userService.getUserProfileInformation().subscribe((res: any) => {
      this.userProfileInformation = res;
    });
  }

  onLogout(){
    localStorage.removeItem('Token');
    this.router.navigateByUrl('user/login');
  }

}
