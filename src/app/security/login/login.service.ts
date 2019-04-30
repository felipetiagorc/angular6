import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MEAT_API } from '../../app.api';
import { User } from './user.model';
import 'rxjs/add/operator/do'

@Injectable()    

export class LoginService {

    // proprieade user:
    user: User    
    constructor (private http: HttpClient){}
    
    /* método login: 
     (recebe email e passwrd do formulário): e retorna um objeto que representa o usuário<any> */

    login (email: string, password: string): Observable<any> {
        return this.http.post<User>(`${MEAT_API}/login`, 
        {email: email, password: password})
        .do(user => this.user = user)
    }

    // se o usuário for diferente de undefined, ele tá logado 
    isLoggedIn(): boolean {
        return this.user !== undefined
    }
    

}