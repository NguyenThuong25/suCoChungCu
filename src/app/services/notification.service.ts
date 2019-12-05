import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class NotificationService {
  private baseURL = "http://localhost:3000/Noti";
  constructor(private http: HttpClient) {}
  getNotilist() {
    return this.http.get(this.baseURL);
  }
  getNoti(id) {
    return this.http.get(`${this.baseURL}/${id}`);
  }
  createNoti(noti) {
    return this.http.post(`${this.baseURL}`, noti);
  }

  updateNoti(id, value) {
    return this.http.put(`${this.baseURL}/${id}`, value);
  }

  deleteNoti(id) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
