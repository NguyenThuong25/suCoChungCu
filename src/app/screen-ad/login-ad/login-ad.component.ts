import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthenticationService } from "src/app/services/authentication.service";
import { first } from "rxjs/operators";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-login-ad",
  templateUrl: "./login-ad.component.html",
  styleUrls: ["./login-ad.component.css"]
})
export class LoginAdComponent implements OnInit {
  // check(user, pass) {
  //   console.log(user, pass);

  //   if (user == "admin" && pass == "admin") {
  //     this.router.navigateByUrl("/screenAdmin/dashboard");
  //   }
  //   if (user == "user" && pass == "user") {
  //     this.router.navigateByUrl("/screenUser/listNoti");
  //   }
  // }

  isInvalid = true;
  formGroup: FormGroup;
  db: Array<any>;
  token: string;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  // getError(el: string) {
  //   switch (el) {
  //     case "user":
  //       if (this.formGroup.get("username").hasError("required")) {
  //         return "Username required";
  //       }
  //       break;
  //     case "pass":
  //       if (this.formGroup.get("password").hasError("required")) {
  //         return "Password required";
  //       }
  //       break;
  //     default:
  //       return "";
  //   }
  // }

  onSubmit(val: { username: ""; password: "" }) {
    console.log(val);

    // this.firebaseService
    //   .getAdmins(val.username, val.password)
    //   .subscribe(result => {
    //     if (result && result.length) {
    //       localStorage.setItem("isLoggin", "1");
    //       this.router.navigate(["dashboard"]);
    //     } else {
    //       this.isInvalid = false;
    //     }
    //   });
    this.authService.login(val.username, val.password).subscribe(
      (res: any) => {
        if (res) {
          this.token = res.data.token;

          if (res.data.role == "admin") {
            localStorage.setItem("token", this.token);
            this.router.navigate(["screenAdmin/dashboard"]);
          } else if (res.data.role !== "admin") {
            localStorage.setItem("tokenUser", this.token);
            this.router.navigate(["screenUser/listNoti"]);
          }
        }
      },
      (error: HttpErrorResponse) => {
        if (error.error.message === "wrong username or password") {
          this.isInvalid = false;
        }
      }
    );
  }
}
