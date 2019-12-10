import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from "rxjs/operators";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
@Injectable({
  providedIn: "root"
})
export class IssueService {
  // dataIssue = [
  //   {
  //     id: 1,
  //     tittle: "vỡ ống nước",
  //     desc:
  //       "The new syntax has a couple of things to note. The first is *ngFor. The * is a shorthand for using the new Angular template syntax with the template tag. This is also called a structural Directive. It is helpful to know that * is just a shorthand to explicitly defining the data bindings on a template tag. The template tag prevents the browser from reading or executing the code within it.",
  //     image: "url ảnh",
  //     status: "done"
  //   },
  //   {
  //     id: 2,
  //     tittle: "vỡ ống nước",
  //     desc:
  //       "The new syntax has a couple of things to note. The first is *ngFor. The * is a shorthand for using the new Angular template syntax with the template tag. This is also called a structural Directive. It is helpful to know that * is just a shorthand to explicitly defining the data bindings on a template tag. The template tag prevents the browser from reading or executing the code within it.",
  //     image: "url ảnh",
  //     status: "doing"
  //   },
  //   {
  //     id: 3,
  //     tittle: "vỡ ống nước",
  //     desc:
  //       "The new syntax has a couple of things to note. The first is *ngFor. The * is a shorthand for using the new Angular template syntax with the template tag. This is also called a structural Directive. It is helpful to know that * is just a shorthand to explicitly defining the data bindings on a template tag. The template tag prevents the browser from reading or executing the code within it.",
  //     image: "url ảnh",
  //     status: "done"
  //   },
  //   {
  //     id: 4,
  //     tittle: "vỡ ống nước",
  //     desc:
  //       "The new syntax has a couple of things to note. The first is *ngFor. The * is a shorthand for using the new Angular template syntax with the template tag. This is also called a structural Directive. It is helpful to know that * is just a shorthand to explicitly defining the data bindings on a template tag. The template tag prevents the browser from reading or executing the code within it.",
  //     image: "url ảnh",
  //     status: "doing"
  //   },
  //   {
  //     id: 5,
  //     tittle: "vỡ ống nước",
  //     desc:
  //       "The new syntax has a couple of things to note. The first is *ngFor. The * is a shorthand for using the new Angular template syntax with the template tag. This is also called a structural Directive. It is helpful to know that * is just a shorthand to explicitly defining the data bindings on a template tag. The template tag prevents the browser from reading or executing the code within it.",
  //     image: "url ảnh",
  //     status: "in_preview"
  //   },
  //   {
  //     id: 5,
  //     tittle: "vỡ ống nước",
  //     desc:
  //       "The new syntax has a couple of things to note. The first is *ngFor. The * is a shorthand for using the new Angular template syntax with the template tag. This is also called a structural Directive. It is helpful to know that * is just a shorthand to explicitly defining the data bindings on a template tag. The template tag prevents the browser from reading or executing the code within it.",
  //     image: "url ảnh",
  //     status: "done"
  //   }
  // ];
  private baseURL = "http://10.124.2.82:8089/api/v1/issues";
  // private baseURL = "http://localhost:3000/issue";
  downloadURL;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("tokenUser")}`
    })
  };
  imageUrl;
  constructor(
    private http: HttpClient,
    private storage: AngularFireStorage,
    private router: Router
  ) {}
  getListIssue() {
    return this.http.get(this.baseURL, this.httpOptions);
  }
  getIssue(id) {
    return this.http.get(`${this.baseURL}/${id}`, this.httpOptions);
  }
  createIssue(issue) {
    return this.http.post(`${this.baseURL}`, issue, this.httpOptions);
  }

  updateIssue(id, value) {
    return this.http.put(`${this.baseURL}/${id}`, value, this.httpOptions);
  }

  deleteIssue(id) {
    return this.http.delete(`${this.baseURL}/${id}`, this.httpOptions);
  }
  updateImage(image: File, issueValue) {
    console.log(issueValue);

    const filePath = "Issue/" + image.name;
    const ref = this.storage.ref(filePath);
    const task = ref.put(image);
    task
      .snapshotChanges()
      .pipe(
        finalize(
          () =>
            (this.downloadURL = ref.getDownloadURL().subscribe(data => {
              let url = [];
              url.push(data);

              issueValue.image = url;
              // issueValue.status = "in_preview";
              console.log(issueValue);
              this.createIssue(issueValue).subscribe(() => {
                this.router.navigateByUrl("/screenUser/listIssue");
              });
            }))
        )
      )
      .subscribe();
  }
}
