import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginAdComponent } from "./screen-ad/login-ad/login-ad.component";
import { ScreenAdminComponent } from "./screen-ad/screen-admin/screen-admin.component";
import { ListUserComponent } from "./screen-ad/list-user/list-user.component";
import { ListRequestAdComponent } from "./screen-ad/list-request-ad/list-request-ad.component";
import { NotificationComponent } from "./screen-ad/notification/notification.component";
import { AddUserComponent } from "./screen-ad/add-user/add-user.component";
import { AddNotiComponent } from "./screen-ad/add-noti/add-noti.component";

import { UpdateUserComponent } from "./screen-ad/update-user/update-user.component";
import { HomePageComponent } from "./screen-user/home-page/home-page.component";
import { ListIssueComponent } from "./screen-user/list-issue/list-issue.component";
import { ListNotiComponent } from "./screen-user/list-noti/list-noti.component";
import { AddIssueComponent } from "./screen-user/add-issue/add-issue.component";

const routes: Routes = [
  { path: "", component: LoginAdComponent },
  {
    path: "screenAdmin",

    component: ScreenAdminComponent,
    children: [
      { path: "listUser", component: ListUserComponent },
      { path: "listRequest", component: ListRequestAdComponent },
      { path: "notification", component: NotificationComponent },
      { path: "listUser/addUser", component: AddUserComponent },
      { path: "listUser/updateUser", component: UpdateUserComponent },
      { path: "notification/addNoti", component: AddNotiComponent }
    ]
  },
  {
    path: "screenUser",
    component: HomePageComponent,
    children: [
      { path: "listIssue", component: ListIssueComponent },
      { path: "listNoti", component: ListNotiComponent },
      { path: "listIssue/addIssue", component: AddIssueComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
