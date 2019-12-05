import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class RequestService {
  private baseURL = "http://localhost:3000/Request";
  constructor(private http: HttpClient) {}
  getRequestlist() {
    return this.http.get(this.baseURL);
  }
  getRequest(id) {
    return this.http.get(`${this.baseURL}/${id}`);
  }

  updateStatus(id, value) {
    return this.http.put(`${this.baseURL}/${id}`, value);
  }

  deleteRequest(id) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
