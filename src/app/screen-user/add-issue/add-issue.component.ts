import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators
} from "@angular/forms";
import { Store } from "@ngrx/store";
import { IssueService } from "src/app/services/issue.service";
@Component({
  selector: "app-add-issue",
  templateUrl: "./add-issue.component.html",
  styleUrls: ["./add-issue.component.css"]
})
export class AddIssueComponent implements OnInit {
  issueForm = this.fb.group({
    // id: ["", Validators.required],
    title: ["", Validators.required],
    desc: ["", Validators.required],
    image: [""]
  });
  image: File;
  imagePreview;
  constructor(
    private fb: FormBuilder,
    private store: Store<any>,
    private issueService: IssueService
  ) {}
  ngOnInit() {}
  uploadImage(files: FileList) {
    this.image = files[0];

    let reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    };
    reader.readAsDataURL(files[0]);
  }

  submitForm() {
    // this.store.dispatch(createUser({ dataUser: this.userForm.value }));
    this.issueService.updateImage(this.image, this.issueForm.value);
  }
}
