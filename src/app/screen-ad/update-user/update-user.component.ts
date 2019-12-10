import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { HttpClient } from "selenium-webdriver/http";

@Component({
  selector: "app-update-user",
  templateUrl: "./update-user.component.html",
  styleUrls: ["./update-user.component.css"]
})
export class UpdateUserComponent implements OnInit {
  user$;

  dataUser;
  userForm = this.fb.group({
    name: ["", Validators.required],
    address: ["", Validators.required],
    email: ["", Validators.required],
    phone: ["", Validators.required]
  });
  updateUser() {
    console.log("value user form", this.userForm.value);

    this.userService
      .updateUser(this.dataUser.id, this.userForm.value)
      .subscribe(u => {
        console.log("update", u);
      });
    this.userService.getUserlist().subscribe();
    this.router.navigateByUrl("/screenAdmin/listUser");
  }
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private store: Store<any>,
    private router: Router,

    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.store
    //   .select(state => state.app.user)
    //   .subscribe(u => {
    //     this.user$ = u;
    //   });

    const id = this.route.snapshot.paramMap.get("id");
    this.userService.getUser(id).subscribe((u: any) => {
      this.dataUser = u.data;
      this.userForm.patchValue(this.dataUser);
      console.log("lấy user :", this.dataUser);
    });
  }
}
