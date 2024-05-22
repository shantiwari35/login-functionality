import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginServiceService } from '../../services/login-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { map } from 'rxjs';

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

    constructor(private login: LoginServiceService, private router: Router) { }
    userForm: FormGroup | any;
    userCred: UserCred | undefined;


    ngOnInit(): void {
        this.userForm = new FormGroup({
            userName: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required]),
        });
    }
    submit() {
        if (this.userForm.valid) {
            const password = btoa(this.userForm.get('password').value);
            this.userForm.patchValue({ password: password });
            this.login.login(this.userForm.value)
                .pipe(map((res: any) => { return JSON.parse(res) }),)
                .subscribe((res: any) => {
                    localStorage.setItem('token', res.data.token);
                    this.router.navigateByUrl('/dashboard');
                }, (err: any) => {
                    console.log(err)
                });
        } else {
            alert('fill proper data');
        }




    }
}

export class UserCred {
    userName: string = '';
    password: string = '';
    station: string = ''

}
