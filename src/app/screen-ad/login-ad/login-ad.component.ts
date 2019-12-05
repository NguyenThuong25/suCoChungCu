import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login-ad",
  templateUrl: "./login-ad.component.html",
  styleUrls: ["./login-ad.component.css"]
})
export class LoginAdComponent implements OnInit {
  check(user, pass) {
    console.log(user, pass);

    if (user == "admin" && pass == "admin") {
      this.router.navigateByUrl("/screenAdmin/listUser");
    }
    if (user == "user" && pass == "user") {
      this.router.navigateByUrl("/screenUser/listNoti");
    }
  }
  constructor(private router: Router) {}

  ngOnInit() {}
}
