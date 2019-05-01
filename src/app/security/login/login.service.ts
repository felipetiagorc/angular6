import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MEAT_API } from '../../app.api';
import { User } from './user.model';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/filter'


@Injectable()    

export class LoginService {

    // proprieade user:
    user: User    
    lastUrl: string
    constructor (private http: HttpClient, private router: Router){
        this.router.events.filter(e => e instanceof NavigationEnd)
                          .subscribe((e: NavigationEnd) => this.lastUrl = e.url)
    }
    
 
    // se o usuário for diferente de undefined, ele tá logado 
    isLoggedIn(): boolean {
        return this.user !== undefined
    }

    /* método login: recebe email e passwrd do formulário e retorna um objeto que representa o usuário<any> */

    login (email: string, password: string): Observable<any> {
        return this.http.post<User>(`${MEAT_API}/login`, 
                            {email: email, password: password})
                        .do(user => this.user = user)
    }
    
    logout(){
        this.user = undefined
    }
    

    handleLogin(path: string = this.lastUrl){
        this.router.navigate(['/login', btoa(path)])  //esse BTOA é pra codificar a url / deixa bonita. aí tem
        // que fazer o decode no componente ... em login.com.ts
    }


}