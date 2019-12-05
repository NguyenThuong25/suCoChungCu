import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class IssueService {
  dataIssue = [
    {
      id: 1,
      tittle: "vỡ ống nước",
      desc: "nhà bị vỡ ống nước ở nhà bếp",
      image: "url ảnh",
      status: "done"
    },
    {
      id: 2,
      tittle: "vỡ ống nước",
      desc: "nhà bị vỡ ống nước ở nhà bếp",
      image: "url ảnh",
      status: "done"
    },
    {
      id: 3,
      tittle: "vỡ ống nước",
      desc: "nhà bị vỡ ống nước ở nhà bếp",
      image: "url ảnh",
      status: "done"
    },
    {
      id: 4,
      tittle: "vỡ ống nước",
      desc: "nhà bị vỡ ống nước ở nhà bếp",
      image: "url ảnh",
      status: "done"
    },
    {
      id: 5,
      tittle: "vỡ ống nước",
      desc: "nhà bị vỡ ống nước ở nhà bếp",
      image: "url ảnh",
      status: "done"
    },
    {
      id: 5,
      tittle: "vỡ ống nước",
      desc: "nhà bị vỡ ống nước ở nhà bếp",
      image: "url ảnh",
      status: "done"
    }
  ];
  getdata() {
    return this.dataIssue;
  }
  constructor() {}
}
