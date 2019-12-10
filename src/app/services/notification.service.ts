import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class NotificationService {
  // private baseURL = "http://localhost:3000/Noti";
  private baseURL = "http://10.124.2.82:8089/api/v1/notices?limit=1000";
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    })
  };
  getNotilist() {
    return this.http.get(this.baseURL, this.httpOptions);
  }
  getNoti(id) {
    return this.http.get(`${this.baseURL}/${id}`);
  }
  createNoti(noti) {
    return this.http.post(
      `http://10.124.2.82:8089/api/v1/admin/notices`,
      noti,
      this.httpOptions
    );
  }

  updateNoti(id, value) {
    return this.http.put(`${this.baseURL}/${id}`, value);
  }

  deleteNoti(id) {
    return this.http.delete(
      `http://10.124.2.82:8089/api/v1/admin/notices/${id}`,
      this.httpOptions
    );
  }
}
