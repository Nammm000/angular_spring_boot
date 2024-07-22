import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  // signupForm: FormGroup | undefined;
  signupForm: FormGroup | undefined;
  match: Boolean;
  isActive: Boolean;
  

  constructor(
    private service: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    localStorage.clear();
    this.match = false;
    this.isActive = true;
    this.signupForm = this.fb.group(
    {
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    }//,
    // }, 
    //{ validator: this.passwordMatchValidator }
    )
  }

  // isActiveChange(): void {
  //   this.isActive = !this.isActive;
  // }

  public onOpenModal(mode: string): void {
    const container = document.getElementById('home-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'signup') {
      button.setAttribute('data-target', '#signupModal');
    }
    container.appendChild(button);
    this.signupForm.reset();
    button.click();
  }

  public passwordMatchValidator(fg: FormGroup, confirmPassword: string): void {
    // const fg = this.signupForm;
    const password = fg.get('password')?.value + '';
    //const confirmPassword = fg.get('confirmPassword')?.value;
    const matching = document.getElementById("match");
    const letter = document.getElementById("letter");
    const capital = document.getElementById("capital");
    const number = document.getElementById("number");
    const length = document.getElementById("length");

    // Validate lowercase letters
    const lowerCaseLetters = /[a-z]/g;
    if(confirmPassword.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
  
    // Validate capital letters
    const upperCaseLetters = /[A-Z]/g;
    if(confirmPassword.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }

    // Validate numbers
    const numbers = /[0-9]/g;
    if(confirmPassword.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
  
    // Validate length
    if(confirmPassword.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    } 

    // matching
    if (password != confirmPassword) {
      fg.get("confirmPassword")?.setErrors({ passwordMismatch: true });
      this.match = false;
      matching.classList.remove("valid");
      matching.classList.add("invalid");
      ///console.log(this.signupForm.invalid, !this.match);
      //return false;
    } else {
      fg.get('confirmPassword')?.setErrors(null);
      this.match = true;
      matching.classList.remove("invalid");
      matching.classList.add("valid");
      //return true;
    }
  }

  focusMethod() {
    document.getElementById("message").style.display = "block";
    //console.log(this.signupForm.invalid, !this.match);
  }

  focusoutMethod() {
    document.getElementById("message").style.display = "none";
  }

  inputPass(myInput: string) {
    const letter = document.getElementById("letter");
    const capital = document.getElementById("capital");
    const number = document.getElementById("number");
    const length = document.getElementById("length");
    
    // Validate lowercase letters
    const lowerCaseLetters = /[a-z]/g;
    if(myInput.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
  
    // Validate capital letters
    const upperCaseLetters = /[A-Z]/g;
    if(myInput.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }

    // Validate numbers
    const numbers = /[0-9]/g;
    if(myInput.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
  
    // Validate length
    if(myInput.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    } 
  }

  focusMethodMatch() {
    document.getElementById("message").style.display = "block";
    document.getElementById("messageMatch").style.display = "block";
  }

  focusoutMethodMatch() {
    document.getElementById("message").style.display = "none";
    document.getElementById("messageMatch").style.display = "none";
  }

  // inputConfirmPass(key: string) {

  //   const matching = document.getElementById("match");
    

  //   if(this.match) {
  //     matching.classList.remove("invalid");
  //     matching.classList.add("valid");
  //   } else {
  //     matching.classList.remove("valid");
  //     matching.classList.add("invalid");
  //   }
  // }

  signup() {
    //console.log(this.signupForm.value);
    this.service.signup(this.signupForm.value).subscribe((response) => {
      console.log(response);
      this.signupForm.reset();
      document.querySelector("div.modal-backdrop").remove();
      this.router.navigateByUrl('/');
    })
  }
}