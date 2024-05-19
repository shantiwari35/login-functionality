import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginServiceService } from '../../services/login-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
    selector: 'app-login-page',
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule, HttpClientModule],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {

    constructor(private login: LoginServiceService) { }
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
            this.login.login(this.userForm.value).subscribe((res:any) => {
                console.log(res);
            }, (err:any) => {
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
