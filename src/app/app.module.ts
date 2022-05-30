import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import {  } from 'ngx-bootstrap/ngx-bootstrap';
import { ModalModule, BsModalRef } from "ngx-bootstrap/modal";
import { DataTablesModule } from "angular-datatables";
import { MaterialModule} from"./material";

import { HrModule} from"./hr/employee/hr.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AppInterceptorService } from "./services/app-interceptor.service";
import { HomeComponent } from './home/home.component';
import { TopheaderComponent } from './home/headers/topheader/topheader.component';
import { FooterComponent } from './home/headers/footer/footer.component';
import { LoginComponent } from './home/account/login/login.component';
import { PageNotFoundComponent } from './home/page-not-found/page-not-found.component';
@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TopheaderComponent,
        FooterComponent,
        LoginComponent,
        PageNotFoundComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        HttpClientModule,
        DataTablesModule,
        MaterialModule,
        ModalModule.forRoot(),

        HrModule,
        AppRoutingModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AppInterceptorService,
            multi: true,
        },
        BsModalRef
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
