import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';
import { Subject, Observable } from 'rxjs/Rx';
import { HatApiService } from './hat-api.service';

@Injectable()
export class AuthService {
  private auth$: Subject<any>;
  private authenticated: boolean;
  private jwtHelper: JwtHelper;
  private hatDomain: string;

  constructor(private hat: HatApiService, private router: Router) {
    this.auth$ = <Subject<any>>new Subject();
    this.authenticated = false;
    this.jwtHelper = new JwtHelper();
  }

  decodeJwt(jwt: string): string {
    const jwtData = this.jwtHelper.decodeToken(jwt);
    const issuer = jwtData['iss'];
    return issuer;
  }

  tryPreviousToken() {
    const storedToken = localStorage.getItem('hatat');

    if (storedToken && (!this.jwtHelper.isTokenExpired(storedToken))) {
      this.router.navigate(['users/authenticate/' + storedToken]);
    } else {
      this.router.navigate(['users/login']);
    }
  }

  authenticate(jwt: string) {
    const hatDomain = this.decodeJwt(jwt);
    this.hatDomain = hatDomain;

    this.hat.validateToken(hatDomain, jwt).subscribe(
      res => {
        if (res && res.message === 'Authenticated') {
          this.authenticated = true;
          localStorage.setItem('hatat', jwt);
        } else {
          this.authenticated = false;
          localStorage.removeItem('hatat');
        }
      },
      err => {
        this.authenticated = false;
        console.log("Could not verify with specified HAT");
        this.auth$.next(this.authenticated);
      },
      () => {
        this.auth$.next(this.authenticated);
      });
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  getDomain(): string {
    return this.hatDomain;
  }

  getAuth$() {
    return this.auth$.asObservable();
  }

  /* Local Storage placeholders */

  // static getCookie(name: string): string {
  //   return localStorage.getItem(name);
  // }

  // static setCookie(name: string, value: string) {
  //   localStorage.setItem(name, value);
  // }

}
