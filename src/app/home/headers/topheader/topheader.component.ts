import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../../services/authentication.service";

@Component({
    selector: "app-topheader",
    templateUrl: "./topheader.component.html",
    styleUrls: ["./topheader.component.scss"],
})
export class TopheaderComponent implements OnInit {
    constructor(public auth: AuthenticationService) {}

    ngOnInit(): void {
    
        $('#sidebarCollapse i,#dismiss').on('click', function () {
            $('.right-sidebar').toggleClass('active');
            $('.page-header').css('padding-right','50px');
            $('#sidebarCollapse i').toggleClass('hidden');
        });
        
       
    }
}
