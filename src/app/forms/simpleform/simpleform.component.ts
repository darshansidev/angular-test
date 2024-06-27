import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-simpleform',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './simpleform.component.html',
  styleUrl: './simpleform.component.css'
})
export class SimpleformComponent {

  email = new FormControl('', [Validators.required])
  password = new FormControl('', [Validators.required, Validators.minLength(6)])

  formData = new FormGroup({
    email: this.email,
    password: this.password
  })

  onSubmit = () => {

    event?.preventDefault();

    if (this.formData.valid == true) {
      alert(this.email.value + " " + this.password.value);
      console.log(this.formData.value, "<-----------------Form Data---------------->");
      console.log(this.password, "<-----------passs>");
    }

    else if (this.email.invalid && this?.password.invalid) {
      console.log(this.password);
      alert('Invalid form');
    }

    else {
      alert('nothing work properly');
    }

  }
}
