import { Component, OnInit } from "@angular/core";
import { Validators, FormBuilder } from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-update-user",
  templateUrl: "./update-user.component.html",
  styleUrls: ["./update-user.component.css"]
})
export class UpdateUserComponent implements OnInit {
  user$;

  userForm = this.fb.group({
    name: ["", Validators.required],
    address: ["", Validators.required],
    email: ["", Validators.required],
    phone: ["", Validators.required]
  });
  updateUser() {
    this.userService.updateUser(this.user$.id, this.userForm.value).subscribe();
    this.userService.getUserlist().subscribe();
    this.router.navigateByUrl("/screenAdmin/listUser");
  }
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private store: Store<any>,
    private router: Router
  ) {}

  ngOnInit() {
    this.store
      .select(state => state.app.user)
      .subscribe(u => {
        this.user$ = u;
      });
  }
}
