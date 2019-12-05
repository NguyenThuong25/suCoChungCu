import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class UserService {
  private baseURL = "http://localhost:3000/User";
  constructor(private http: HttpClient) {}
  getUserlist() {
    return this.http.get(this.baseURL);
  }
  getUser(id) {
    return this.http.get(`${this.baseURL}/${id}`);
  }
  createUser(user) {
    return this.http.post(`${this.baseURL}`, user);
  }

  updateUser(id, value) {
    return this.http.put(`${this.baseURL}/${id}`, value);
  }

  deleteUser(id) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
