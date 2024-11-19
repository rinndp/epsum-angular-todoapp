import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LayoutSinHeaderComponent} from "./layout-sin-header/layout-sin-header.component";
import {RegisterComponent} from "./register/register.component";
import {LayoutConHeaderComponent} from "./layout-con-header/layout-con-header.component";
import {MainPageComponent} from "./main-page/main-page.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutSinHeaderComponent,
    children: [
      {path: "", component: LoginComponent},
      {path: "register", component: RegisterComponent},
    ]},

  {
    path: "home",
    component: LayoutConHeaderComponent,
    children: [
      {path: "", component: MainPageComponent},
    ]},

  {path: "**", component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
