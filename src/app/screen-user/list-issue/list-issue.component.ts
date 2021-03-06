import { Component, OnInit } from "@angular/core";
import { IssueService } from "src/app/services/issue.service";
export interface Issue {
  id: number;
  tittle: string;
  desc: string;
  image: string;
  status: string;
}
export interface Status {
  value: string;
  viewValue: string;
}
@Component({
  selector: "app-list-issue",
  templateUrl: "./list-issue.component.html",
  styleUrls: ["./list-issue.component.css"]
})
export class ListIssueComponent implements OnInit {
  listIssue;
  displayedColumns: string[] = ["id", "tittle", "desc", "image", "status"];

  constructor(private issue: IssueService) {}

  ngOnInit() {
    this.issue.getListIssue().subscribe((u: any) => {
      console.log("issue", u);

      this.listIssue = u.data.results;
      console.log("su co", this.listIssue);
    });
  }
}
