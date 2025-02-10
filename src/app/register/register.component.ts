import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm : FormGroup;

  submitted = false;


constructor(){
  this.registerForm = new FormGroup({

    name: new FormControl('',[
      Validators.required
    ]),


    username: new FormControl('',[
      Validators.required,
      this.noWhitespaceValidator
    ]),

    
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),

    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      this.passwordStrengthValidator
    ]),



    confirmPassword: new FormControl('',[
      Validators.required])


  } , { validators: this.passwordMatchValidator });
}
get formControls(){
  return this.registerForm.controls;
}

// Custom validator to check for whitespace
noWhitespaceValidator(control: AbstractControl): { [key: string]: any } | null {
  if (control.value && control.value.trim().length === 0) {
    return { whitespace: true };
  }
  return null;
}


passwordStrengthValidator(control: AbstractControl): ValidationErrors | null {
  const value = control.value;
  if (!value) {
    return null;
  }
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecialChar = /[!@#_$%^&*(),.?":{}|<>]/.test(value);
  const valid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar;
  return valid ? null : { passwordStrength: true };
}


passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordMismatch: true };
};





onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log('Form Data:', this.registerForm.value);
 
    }
  }

}
