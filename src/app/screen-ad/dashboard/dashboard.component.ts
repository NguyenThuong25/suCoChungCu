import { Component, OnInit } from "@angular/core";
import { RequestService } from "src/app/services/request.service";
import { NotificationService } from "src/app/services/notification.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  listRequest;
  listNoti;
  listUser;

  constructor(
    private request: RequestService,
    private notiService: NotificationService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.request.getRequestlist().subscribe((u: any) => {
      this.listRequest = u.data.results;
    });
    this.notiService.getNotilist().subscribe((u: any) => {
      this.listNoti = u.data.results;
    });
    this.userService.getUserlist().subscribe((u: any) => {
      this.listUser = u.data.results;
    });
  }
}
