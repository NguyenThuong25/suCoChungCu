import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
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
  private baseURL = "http://localhost:3000/issue";
  constructor(private http: HttpClient) {}
  getissuelist() {
    return this.http.get(this.baseURL);
  }
  getissue(id) {
    return this.http.get(`${this.baseURL}/${id}`);
  }
  createissue(user) {
    return this.http.post(`${this.baseURL}`, user);
  }

  updateissue(id, value) {
    return this.http.put(`${this.baseURL}/${id}`, value);
  }

  deleteissue(id) {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
