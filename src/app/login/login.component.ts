import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'login-app',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {
    login: string;
    password: string;
    message: string;

    constructor(private roter: Router) {
    }

    loginUser() {
        if(this.login == 'admin' && this.password == 'qwerty') {
            this.roter.navigate(['/dashboard']);
        } else {
            this.message = 'Неверный логин или пароль';
        }
    }
}