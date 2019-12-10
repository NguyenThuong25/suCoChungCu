import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class RequestService {
  private baseURL = "http://10.124.2.82:8089/api/v1/admin/issues";
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    })
  };
  getRequestlist() {
    return this.http.get(`${this.baseURL}?limit=1000`, this.httpOptions);
  }
  getRequest(id) {
    return this.http.get(`${this.baseURL}/${id}`, this.httpOptions);
  }

  updateStatus(id, value) {
    return this.http.put(`${this.baseURL}/${id}`, value, this.httpOptions);
  }

  deleteRequest(id) {
    return this.http.delete(`${this.baseURL}/${id}`, this.httpOptions);
  }
}
