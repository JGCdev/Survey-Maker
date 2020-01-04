import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class LoggedService {

  loggedIn = false;
  user: SocialUser;

  constructor() { }

  isLogged(): boolean {
    return this.loggedIn || localStorage.getItem('user') !== 'null';
  }

  setLoggedUser(su: SocialUser) {
    this.user = su;
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  setLogged(value) {
    this.loggedIn = value;
  }

  logOut() {
    this.loggedIn = false;
    localStorage.removeItem('user');
  }

}
