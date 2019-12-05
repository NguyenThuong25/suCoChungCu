import { Component, OnInit } from "@angular/core";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";
import { RequestService } from "src/app/services/request.service";
import { DialogComponent } from "../dialog/dialog.component";
import { MatDialog } from "@angular/material";
export interface Status {
  value: string;
  viewValue: string;
}
// export interface Request {
//   id: string;
//   nameUser: string;
//   room: string;
//   desc: string;
//   phone: string;
//   image: string;
//   status: string;
//   worker: {
//     id: string;
//     name: string;
//     specialize: string;
//     phone: string;
//   };
// }
@Component({
  selector: "app-list-request-ad",
  templateUrl: "./list-request-ad.component.html",
  styleUrls: ["./list-request-ad.component.css"],
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition(
        "expanded <=> collapsed",
        animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)")
      )
    ])
  ]
})
export class ListRequestAdComponent implements OnInit {
  listRequest;
  listInpreview;
  listDoing;
  listdone;
  listReject;
  columnsToDisplay = [
    "id",
    "nameUser",
    "address",
    "phone",
    "tittle",
    "doing",
    "reject"
  ];
  // status: Status[] = [
  //   { value: "inpreview", viewValue: "inpreview" },
  //   { value: "doing", viewValue: "doing" },
  //   { value: "done", viewValue: "done" },
  //   { value: "reject", viewValue: "reject" }
  // ];
  // expandedElement: PeriodicElement | null;
  constructor(private request: RequestService, public dialog: MatDialog) {}

  ngOnInit() {
    this.request.getRequestlist().subscribe(u => {
      this.listRequest = u;
      this.listInpreview = this.listRequest.filter(e => {
        return e.status === "in_preview";
      });
      this.listDoing = this.listRequest.filter(e => {
        return e.status === "doing";
      });
      this.listdone = this.listRequest.filter(e => {
        return e.status == "done";
      });
      console.log(this.listRequest); //ra một mảng
      console.log(this.listDoing); // ra mảng rỗng
    });
  }
  changeDoing(element) {
    element.status = "doing";
    console.log(element);

    this.request.updateStatus(element.id, element).subscribe();
    this.request.getRequestlist().subscribe();
    this.listInpreview = this.listRequest.filter(e => {
      return e.status === "in_preview";
    });
    this.listDoing = this.listRequest.filter(e => {
      return e.status === "doing";
    });
  }
  changeDone(element) {
    element.status = "done";
    console.log(element);

    this.request.updateStatus(element.id, element).subscribe();
    this.request.getRequestlist().subscribe();
    this.listDoing = this.listRequest.filter(e => {
      return e.status === "doing";
    });
    this.listdone = this.listRequest.filter(e => {
      return e.status === "done";
    });
  }
  openDialogDelete(id): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: "300px",
      data: { title: "bạn có muốn xóa không??? " }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log("The dialog was closed");
      if (result) {
        this.request.deleteRequest(id).subscribe(() => {
          this.listRequest = this.listRequest.filter(u => {
            return u.id != id;
          });
        });
      }
    });
  }
}
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
//   description: string;
//   status;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     position: 1,
//     name: "Hydrogen",
//     weight: 1.0079,
//     symbol: "H",
//     description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
//         atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
//     status: "done"
//   },
//   {
//     position: 1,
//     name: "Hydrogen",
//     weight: 1.0079,
//     symbol: "H",
//     description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
//         atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
//     status: "done"
//   },
//   {
//     position: 1,
//     name: "Hydrogen",
//     weight: 1.0079,
//     symbol: "H",
//     description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
//         atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
//     status: "done"
//   },
//   {
//     position: 1,
//     name: "Hydrogen",
//     weight: 1.0079,
//     symbol: "H",
//     description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
//         atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
//     status: "done"
//   }
// ];
