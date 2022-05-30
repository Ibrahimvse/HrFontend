import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import {NgxPrintModule} from 'ngx-print';
import { HrRoutingModule } from "./hr-routing.module";
import { MaterialModule } from "../../material";
import { SharedComponentsModule } from "../../shared-components/shared-components.module";
import { MyinfoComponent } from "./myinfo/myinfo.component";
import { BacicInfoComponent } from "./bacic-info/bacic-info.component";
import {
    CertificateInfoComponent,
    ElementryCertificateComponent,
    IntermediateCertificateComponent,
    HighschoolCertificateComponent,
    UndergraduateCertificateComponent,
    GraduateCertificateComponent,
    DiplomaCertificateComponent
} from "./certificate-info/certificate-info.component";

@NgModule({
    declarations: [
        MyinfoComponent,
        BacicInfoComponent,
        CertificateInfoComponent,
        ElementryCertificateComponent,
        IntermediateCertificateComponent,
        HighschoolCertificateComponent,
        UndergraduateCertificateComponent,
        GraduateCertificateComponent,
        DiplomaCertificateComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        MaterialModule,
        NgxPrintModule,
        HrRoutingModule,
        SharedComponentsModule,
    ],
    exports: [MyinfoComponent, BacicInfoComponent],
})
export class HrModule {}
