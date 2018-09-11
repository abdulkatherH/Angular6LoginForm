import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


import { Observable, of, throwError } from 'rxjs';

@Injectable()
export class AuthenticationService {

    uri = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        
        return this.http.post<any>(`${this.uri}/api/authenticate`, { username: username, password: password })
            .pipe(map(user => {
                alert("--> "+user);
                if(user != null){
                    alert('if');
                    return user;
                }else{
                    alert('else');
                    return throwError({ error: { message: 'Username or password is incorrect' } });
                }
                // if(user != 'hai'){
                //     alert("return value2: "+user);
                //     return user;
                // }else{
                //     alert("return value3: "+user);
                //     return throwError({ error: { message: 'Username or password is incorrect' } });
                // }
                //return user;
            }));
    }

    // logout() {
    //     // remove user from local storage to log user out
    //     localStorage.removeItem('currentUser');
    // }
}