import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MyinfoComponent } from './myinfo/myinfo.component';
import { BacicInfoComponent } from './bacic-info/bacic-info.component';
import { CertificateInfoComponent } from './certificate-info/certificate-info.component';
import { OfficialDocumentsComponent } from './official-documents/official-documents.component';

const routes: Routes = [
    {
        path: "employee",
        
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "myinfo",
            },
            {
                path: "myinfo",
                component: MyinfoComponent,
                //canActivate: [AuthGuard],
                children: [
                    {
                        path:"basicinfo",
                        component:BacicInfoComponent
                    },
                    {
                        path:"certificates",
                        component:CertificateInfoComponent
                    },
                    {
                        path:"officialdocuments",
                        component:OfficialDocumentsComponent
                    }
                ]
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HrRoutingModule {}
