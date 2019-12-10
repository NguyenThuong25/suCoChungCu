import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { throwError, Observable, BehaviorSubject, config } from "rxjs";
import { retry, catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  loginUrl = "http://10.124.2.82:8089/api/v1/auth/login";
  user;
  admin;
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
    Authorization: `Bearer ${localStorage.getItem("token")}`
  };

  constructor(
    private router: Router,

    private http: HttpClient
  ) {}

  login(email: string, pass: string) {
    return this.http.post(
      this.loginUrl,
      { username: email, password: pass },
      this.httpOptions
    );
  }

  get isLoggedIn(): boolean {
    // const user = localStorage.getItem("isLoggin");
    // return user !== null;
    const user = localStorage.getItem("tokenUser");
    const admin = localStorage.getItem("token");
    if (user !== null || admin !== null) {
      return true;
    }
    return false;
  }
}
