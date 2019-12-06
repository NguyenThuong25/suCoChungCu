import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AngularFireModule } from "@angular/fire";
import { AngularFireStorageModule } from "@angular/fire/storage";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LoginAdComponent } from "./screen-ad/login-ad/login-ad.component";
import { ScreenAdminComponent } from "./screen-ad/screen-admin/screen-admin.component";
import { ListUserComponent } from "./screen-ad/list-user/list-user.component";
import { ListRequestAdComponent } from "./screen-ad/list-request-ad/list-request-ad.component";
import { NotificationComponent } from "./screen-ad/notification/notification.component";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";
import { MatDialogModule } from "@angular/material/dialog";
import { MatCardModule } from "@angular/material/card";
import { from } from "rxjs";
import { AddUserComponent } from "./screen-ad/add-user/add-user.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AddNotiComponent } from "./screen-ad/add-noti/add-noti.component";
import { DialogComponent } from "./screen-ad/dialog/dialog.component";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { UpdateUserComponent } from "./screen-ad/update-user/update-user.component";

import { MatTabsModule } from "@angular/material/tabs";
import { StoreModule } from "@ngrx/store";
import { reducers } from "./reducers";
import { HomePageComponent } from "./screen-user/home-page/home-page.component";
import { ListIssueComponent } from "./screen-user/list-issue/list-issue.component";
import { ListNotiComponent } from "./screen-user/list-noti/list-noti.component";
import { AddIssueComponent } from "./screen-user/add-issue/add-issue.component";
import { environment } from "../environments/environment";

@NgModule({
  declarations: [
    AppComponent,
    LoginAdComponent,
    ScreenAdminComponent,
    ListUserComponent,
    ListRequestAdComponent,
    NotificationComponent,
    AddUserComponent,
    AddNotiComponent,
    DialogComponent,

    UpdateUserComponent,

    HomePageComponent,

    ListIssueComponent,

    ListNotiComponent,

    AddIssueComponent
  ],
  entryComponents: [DialogComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatToolbarModule,
    MatSelectModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatCardModule,
    MatTabsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireStorageModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
