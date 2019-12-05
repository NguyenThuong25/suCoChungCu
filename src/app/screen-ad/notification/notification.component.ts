import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { NotificationService } from "src/app/services/notification.service";
import { MatDialog } from "@angular/material";
import { DialogComponent } from "../dialog/dialog.component";
// export interface Notification {
//   id: string;
//   tittle: string;
//   desc: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
//   { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
//   { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
//   { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
//   { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
//   { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
//   { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
//   { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
//   { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
//   { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" }
// ];
@Component({
  selector: "app-notification",
  templateUrl: "./notification.component.html",
  styleUrls: ["./notification.component.css"]
})
export class NotificationComponent implements OnInit {
  displayedColumns: string[] = ["id", "tittle", "desc", "delete"];
  notification;

  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }
  openDialogDelete(id): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "300px",
      data: { title: "bạn có muốn xóa không??? " }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      if (result) {
        this.noti.deleteNoti(id).subscribe(() => {
          this.notification = this.notification.filter(u => {
            return u.id != id;
          });
        });
      }
    });
  }
  constructor(private noti: NotificationService, public dialog: MatDialog) {}

  ngOnInit() {
    this.noti.getNotilist().subscribe(noti => {
      this.notification = noti;
    });
  }
}
