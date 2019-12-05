import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators
} from "@angular/forms";
import { UserService } from "src/app/services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.css"]
})
export class AddUserComponent implements OnInit {
  user;
  userForm = this.fb.group({
    // id: ["", Validators.required],
    name: ["", Validators.required],
    address: ["", Validators.required],
    email: ["", Validators.required],
    phone: ["", Validators.required]
  });
  addUser() {
    this.user = this.userForm.value;
    console.log(this.user);
    this.userService.createUser(this.user).subscribe();
    this.userService.getUserlist().subscribe();
    this.router.navigateByUrl("/screenAdmin/listUser");
  }
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit() {}
}
