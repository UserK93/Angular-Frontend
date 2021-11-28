import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { RestapiService } from '../restapi/restapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string;
  message: any

  constructor(private service: RestapiService,private router:Router) { }

  ngOnInit() {
  }
  //login mit username und passwort nach doLogin Aufruf
  //nach der Anmeldung wird der Nutzer zur Startseite /home umgeleitet
  doLogin() {
    let resp = this.service.login(this.username, this.password);
    resp.subscribe((data) => {
      this.message = data;
     this.router.navigate(["/home"])
    });
  }
}