import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class LoginAdService {
  private baseURL = "http://10.124.2.82:8089/api/v1/auth/login";

  loginUser(username, password) {
    return this.http.post(`${this.baseURL}`, {
      username: username,
      password: password
    });
  }

  constructor(private http: HttpClient) {}
}
