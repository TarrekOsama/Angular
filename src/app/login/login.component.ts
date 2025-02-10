import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule,RouterLink],
templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    // User object to store form data
    user = {
      email: '',
      password: '',
    };
  
    // Flag to check if the form is submitted
    submitted = false;
  
    // Handle form submission
    handleFormSubmit(form: any) {

      if (form.valid) {
        this.submitted = true;
        console.log('Form Submitted!', this.user);
      } else {
        console.log('Form is invalid');
      }
    }

}
