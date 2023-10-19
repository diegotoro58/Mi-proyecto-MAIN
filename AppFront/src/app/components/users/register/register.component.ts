import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/service/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  formulario: FormGroup;

  userService = inject(UsersService)
  router = inject(Router);

  constructor() {
    this.formulario = new FormGroup({
      name: new FormControl(),
      lastname: new FormControl(),
      age: new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  async onSubmit() {
    const res = await this.userService.register(this.formulario.value);
    console.log(res);
    if(!res.error){
      this.router.navigate(['/home'])
    }
  }
}
