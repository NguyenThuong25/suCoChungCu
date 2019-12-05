import { Component, OnInit, Inject, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { MatTable } from "@angular/material";
import { UserService } from "src/app/services/user.service";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { DialogComponent } from "../dialog/dialog.component";

import { element } from "protractor";
import { Store } from "@ngrx/store";
import { updateUser } from "src/app/reducers/action";

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.css"]
})
export class ListUserComponent implements OnInit {
  displayedColumns: string[] = [
    "id",
    "name",
    "address",
    "email",
    "phone",
    "update",
    "delete"
  ];

  listUser;

  applyFilter(event) {
    this.listUser.filter = event;
    console.log(this.listUser);
  }
  constructor(
    private users: UserService,
    public dialog: MatDialog,
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.users.getUserlist().subscribe(u => {
      this.listUser = u;
    });
    console.log(this.listUser);
  }
  openDialogDelete(id): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "300px",
      data: { title: "bạn có muốn xóa không??? " }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      if (result) {
        this.users.deleteUser(id).subscribe(() => {
          console.log(this.listUser);

          this.listUser = this.listUser.filter(u => {
            return u.id != id;
          });
        });
      }
    });
  }

  chageUser(user) {
    this.store.dispatch(updateUser({ dataUser: user }));
  }
}
