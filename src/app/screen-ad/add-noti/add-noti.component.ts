import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators
} from "@angular/forms";
import { NotificationService } from "src/app/services/notification.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-add-noti",
  templateUrl: "./add-noti.component.html",
  styleUrls: ["./add-noti.component.css"]
})
export class AddNotiComponent implements OnInit {
  noti;
  notiForm = this.fb.group({
    tittle: ["", Validators.required],
    desc: ["", Validators.required]
  });
  constructor(
    private fb: FormBuilder,
    private notiService: NotificationService,
    private router: Router
  ) {}

  ngOnInit() {}
  addNoti() {
    this.noti = this.notiForm.value;
    this.notiService.createNoti(this.noti).subscribe();
    this.notiService.getNotilist().subscribe();
    this.router.navigateByUrl("/screenAdmin/notification");
  }
}
