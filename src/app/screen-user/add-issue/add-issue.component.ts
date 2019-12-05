import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators
} from "@angular/forms";
@Component({
  selector: "app-add-issue",
  templateUrl: "./add-issue.component.html",
  styleUrls: ["./add-issue.component.css"]
})
export class AddIssueComponent implements OnInit {
  issueForm = this.fb.group({
    // id: ["", Validators.required],
    tittle: ["", Validators.required],
    desc: ["", Validators.required]
  });
  constructor(private fb: FormBuilder) {}
  ngOnInit() {}
}
