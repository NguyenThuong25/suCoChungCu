import { Component, OnInit } from "@angular/core";
import { NotificationService } from "src/app/services/notification.service";
export interface Notification {
  id: string;
  tittle: string;
  desc: string;
}
@Component({
  selector: "app-list-noti",
  templateUrl: "./list-noti.component.html",
  styleUrls: ["./list-noti.component.css"]
})
export class ListNotiComponent implements OnInit {
  displayedColumns: string[] = ["id", "tittle", "desc"];
  notification;
  searchText;
  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  constructor(private noti: NotificationService) {}

  ngOnInit() {
    this.noti.getNotilist().subscribe(u => {
      this.notification = u;
    });
  }
}
