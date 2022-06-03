import { Component, Input, OnInit } from "@angular/core";
import { OfficialDocumentsService } from "../../../services/official-documents.service";
import {
    Documents,
    NationalId,
    RationCard,
    AddressCard,
    CivilId,
    UniversityId,
    Passport,
    CertificateOfNationality,
} from "../../../classes/officialdocuments";
import { NgForm } from "@angular/forms";
@Component({
    selector: "app-official-documents",
    templateUrl: "./official-documents.component.html",
    styleUrls: ["./official-documents.component.scss"],
})
export class OfficialDocumentsComponent implements OnInit {
    constructor(public documentService: OfficialDocumentsService) {}

    ngOnInit(): void {
       
    }

    getTitle(type: string): string {
        return this.documentService.documentTypes.find(
            (t) => t.type == type
        ).title;
    }

    submit() {}

    print() {
        window.print();
    }
    prinThisDocument(id:string){
        
    }
    scroll(id:string){
        let el = document.getElementById(id);
        el.scrollIntoView({behavior: 'smooth'});   
    }
}

@Component({
    selector: "app-document-national-id",
    templateUrl: "./templates/national-id.html",
    styleUrls: ["./official-documents.component.scss"],
})
export class NationalIdComponent implements OnInit {
    @Input() item: NationalId;
    constructor(public documentService: OfficialDocumentsService) {}
    ngOnInit(): void {

    }

    isValid(form:NgForm) {
        this.item.isValid = form.valid;
    }
}


@Component({
    selector: "app-document-civil-id",
    templateUrl: "./templates/civil-id.html",
    styleUrls: ["./official-documents.component.scss"],
})
export class CivilIdComponent implements OnInit {
    @Input() item: CivilId;
    constructor(public documentService: OfficialDocumentsService) {}
    ngOnInit(): void {}

    isValid(form:NgForm) {
        this.item.isValid = form.valid;
    }
}

@Component({
    selector: "app-document-ration-card",
    templateUrl: "./templates/ration-card.html",
    styleUrls: ["./official-documents.component.scss"],
})
export class RationCardComponent implements OnInit {
    @Input() item: RationCard;
    constructor(public documentService: OfficialDocumentsService) {}
    ngOnInit(): void {}

    isValid(form:NgForm) {
        this.item.isValid = form.valid;
    }
}

@Component({
    selector: "app-document-address-card",
    templateUrl: "./templates/address-card.html",
    styleUrls: ["./official-documents.component.scss"],
})
export class AddressCardComponent implements OnInit {
    @Input() item: AddressCard;
    constructor(public documentService: OfficialDocumentsService) {}
    ngOnInit(): void {}

    isValid(form:NgForm) {
        this.item.isValid = form.valid;
    }
}

@Component({
    selector: "app-document-certificate-of-nationality",
    templateUrl: "./templates/certificate-of-nationality.html",
    styleUrls: ["./official-documents.component.scss"],
})
export class CertificateOfNationalityComponent implements OnInit {
    @Input() item: CertificateOfNationality;
    constructor(public documentService: OfficialDocumentsService) {}
    ngOnInit(): void {}

    isValid(form:NgForm) {
        this.item.isValid = form.valid;
    }
}


@Component({
    selector: "app-document-passport",
    templateUrl: "./templates/passport.html",
    styleUrls: ["./official-documents.component.scss"],
})
export class PassportComponent implements OnInit {
    @Input() item: Passport;
    constructor(public documentService: OfficialDocumentsService) {}
    ngOnInit(): void {}

    isValid(form:NgForm) {
        this.item.isValid = form.valid;
    }
}

@Component({
    selector: "app-document-university-id",
    templateUrl: "./templates/university-id.html",
    styleUrls: ["./official-documents.component.scss"],
})
export class UniversityIdComponent implements OnInit {
    @Input() item: UniversityId;
    constructor(public documentService: OfficialDocumentsService) {}
    ngOnInit(): void {}

    isValid(form:NgForm) {
        this.item.isValid = form.valid;
    }
}


