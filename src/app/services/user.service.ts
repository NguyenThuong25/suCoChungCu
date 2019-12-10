import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  // private baseURL="http://localhost:3000/User";
  private baseURL = "http://10.124.2.82:8089/api/v1/admin/users";
  constructor(private http: HttpClient, private auth: AuthenticationService) {}
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    })
  };

  getUserlist() {
    return this.http.get(`${this.baseURL}?limit=1000`, this.httpOptions);
  }
  getUser(id) {
    return this.http.get(`${this.baseURL}/${id}`, this.httpOptions);
  }
  createUser(user) {
    return this.http.post(`${this.baseURL}`, user, this.httpOptions);
  }

  updateUser(id, value) {
    return this.http.put(`${this.baseURL}/${id}`, value, this.httpOptions);
  }

  deleteUser(id) {
    return this.http.delete(`${this.baseURL}/${id}`, this.httpOptions);
  }
}
