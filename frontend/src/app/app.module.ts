import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { LayoutSinHeaderComponent } from './layout-sin-header/layout-sin-header.component';
import { LayoutConHeaderComponent } from './layout-con-header/layout-con-header.component';
import { RegisterComponent } from './register/register.component';
import { MainPageComponent } from './main-page-trabajo/main-page.component';
import { AddTaskModalComponent } from './add-task-modal/add-task-modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MainPageFamiliaComponent } from './main-page-familia/main-page-familia.component';
import { MainPageHogarComponent } from './main-page-hogar/main-page-hogar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    LayoutSinHeaderComponent,
    LayoutConHeaderComponent,
    RegisterComponent,
    MainPageComponent,
    AddTaskModalComponent,
    MainPageFamiliaComponent,
    MainPageHogarComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
