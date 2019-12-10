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
import { User } from "src/app/models/user.model";
import { observable } from "rxjs";

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
  searchText;
  listUser;

  constructor(
    private users: UserService,
    public dialog: MatDialog,
    private store: Store<any>
  ) {}

  ngOnInit() {
    this.users.getUserlist().subscribe((u: any) => {
      console.log("a", u.data.results);
      this.listUser = u.data.results;
    });

    console.log("jhjkh", this.listUser);
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
