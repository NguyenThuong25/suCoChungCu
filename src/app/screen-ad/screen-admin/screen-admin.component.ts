import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-screen-admin",
  templateUrl: "./screen-admin.component.html",
  styleUrls: ["./screen-admin.component.css"]
})
export class ScreenAdminComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  logout() {
    this.router.navigateByUrl("/");
  }
}
