import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(
    private service: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.service.logout().subscribe((response) => {
      localStorage.clear();
      //console.log("1 "+localStorage.getItem('JWT'));
      //console.log(response.message);
      //this.message = response.message;
      this.router.navigateByUrl('/');
    })
  }

}
