import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

interface registerResponse{
    success: boolean
  }

@Injectable({
    providedIn: 'root'  
  })
export class UserService {

    uri = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`/users`);
    }

    getById(id: number) {
        return this.http.get(`/users/` + id);
    }

    register(user: User) {
        alert("register user: "+user);
        return this.http.post(`${this.uri}/api/register`, user);
    }

    update(user: User) {
        return this.http.put(`/users/` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`/users/` + id);
    }
}