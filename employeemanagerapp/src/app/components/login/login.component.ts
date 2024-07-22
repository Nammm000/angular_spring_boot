import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup;
  isActive: Boolean;

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    localStorage.clear();
    this.isActive = true;
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    })
  }

  public onOpenModal(mode: string): void {
    const container = document.getElementById('home-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'login') {
      button.setAttribute('data-target', '#loginModal');
    }
    container.appendChild(button);
    this.loginForm.reset();
    button.click();
  }

  // isActiveChange(): void {
  //   this.isActive = !this.isActive;
  // }

  login() {
    localStorage.clear();
    console.log(this.loginForm.value);
    this.service.login(this.loginForm.value).subscribe((response) => {
      console.log(response);
      if (response.jwtToken) {
        // alert(response.jwtToken);
        const jwtToken = response.jwtToken;
        localStorage.setItem('JWT', jwtToken);
        this.loginForm.reset();
        document.querySelector("div.modal-backdrop").remove();
        //const ele = document.getElementsByClassName("modal-backdrop");
        //ele.classList.remove("modal-backdrop");
        //$('.modal-backdrop').remove();
        this.router.navigateByUrl('/diarys');
        // this.router.navigate(['/diarys']);
      } else {
        alert("Can't login");
      }
    })
  }

}