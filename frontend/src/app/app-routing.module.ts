import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LayoutSinHeaderComponent} from "./layout-sin-header/layout-sin-header.component";
import {RegisterComponent} from "./register/register.component";
import {LayoutConHeaderComponent} from "./layout-con-header/layout-con-header.component";
import {MainPageComponent} from "./main-page-trabajo/main-page.component";
import {MainPageFamiliaComponent} from "./main-page-familia/main-page-familia.component";
import {MainPageHogarComponent} from "./main-page-hogar/main-page-hogar.component";

const routes: Routes = [
  {
    path: "",
    component: LayoutSinHeaderComponent,
    children: [
      {path: "", component: LoginComponent},
      {path: "register", component: RegisterComponent},
    ]},

  {
    path: "",
    component: LayoutConHeaderComponent,
    children: [
      {path: "work", component: MainPageComponent},
      {path: "family", component: MainPageFamiliaComponent},
      {path: "home", component: MainPageHogarComponent},
    ]},

  {path: "**", component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
