import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsersProvider {

  private API_URL = 'https://reqres.in/api/'


  constructor(public http: Http) {}

  CreateAccountPage(email: String, password:String){
      return new Promise((resolve,reject ) => {
        var data = {
          email : email,
          password : password
        };

       this.http.post(this.API_URL + 'register', data)
        .subscribe((result: any) => {
          resolve(result.json());
        },
        (error) => {
          reject(error.json());
        });
      });
    }

    Login(email:string,password:string){
      return new Promise((resolve,reject ) =>{
        var data={
          email : email,
          password : password
        };

        this.http.post(this.API_URL+'login',data)
        .subscribe((result : any) =>{
          resolve(result.json());
        },
        (error)=>{
          reject(error.json());
        });
      });
    }

}
