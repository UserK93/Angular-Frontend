import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http:HttpClient) { }


 //Authentifizierung durch login 
login(username:string,password:string){
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  return this.http.get("http://localhost:8083/",{headers,responseType: 'text' as 'json'})
}

//Listen alle Produkte mit Authentifizierung des Users user
  getProducts() {
    let username='user'
    let password='user'
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
   return  this.http.get("http://localhost:8083/getProducts",{headers});
  }
}