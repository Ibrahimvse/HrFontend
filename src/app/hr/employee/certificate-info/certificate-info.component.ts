import { Component, OnInit, AfterViewInit, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { CerificateService } from "../../../services/cerificate.service";
import {
    Certificate,
    ElementryCertificateForm,
    IntermediateCertificateForm,
    HisghschoolCertificateForm,
    UndergraduateCertificateForm,
    GraduateCertificateForm,
} from "../../../classes/certificate";
import { ConstantsUtils, Branch } from "../../../classes/constants";
declare var $: any;
@Component({
    selector: "app-certificate-info",
    templateUrl: "./certificate-info.component.html",
    styleUrls: ["./certificate-info.component.scss"],
})
export class CertificateInfoComponent implements OnInit {
    constructor(public certificateService: CerificateService) {}

    ngOnInit(): void {}
    getTitle(type: string): string {
        return this.certificateService.certificateTypes.find(
            (t) => t.type == type
        ).title;
    }
    submit() {
        console.log(this.certificateService.Certificate.certificates);
        this.certificateService.isCertificateFormSubmitted = true;
        if (this.certificateService.Certificate.isValid() == false) return;
    }
    print() {
        window.print();
    }
    prinThisCertificate(id: string) {
        $("#"+id).clone().appendTo("#printarea");
        $(".content-container").addClass("d-none")
        window.print()
        $(".content-container").addClass("d-block")
        $("#printarea").empty()
    }

    onCurrentCertificateChange(i: number, event: any) {
        var currentCertificateIndex =
            this.certificateService.Certificate.certificates.findIndex(
                (c) => c.isCurrentCertificate == true
            );
        if(currentCertificateIndex!=-1){
            this.certificateService.Certificate.certificates[currentCertificateIndex].isCurrentCertificate=false;
        }
        this.certificateService.Certificate.certificates[i].isCurrentCertificate=event.target.checked; 
    }
}

@Component({
    selector: "app-certificate-elementry",
    templateUrl: "./templates/elementry.html",
    styleUrls: ["./certificate-info.component.scss"],
})
export class ElementryCertificateComponent implements OnInit {
    @Input() item: ElementryCertificateForm;
    @Input() certificateTitle: string = "";
    constructor(public certificateService: CerificateService) {}
    ngOnInit() {}
    isValid(form: NgForm) {
        this.item.isValid = form.valid;
    }
}

@Component({
    selector: "app-certificate-intermediate",
    templateUrl: "./templates/elementry.html",
    styleUrls: ["./certificate-info.component.scss"],
})
export class IntermediateCertificateComponent implements OnInit {
    @Input() item: IntermediateCertificateForm;
    constructor(public certificateService: CerificateService) {}
    ngOnInit() {}
    isValid(form: NgForm) {
        this.item.isValid = form.valid;
    }
}

@Component({
    selector: "app-certificate-highschool",
    templateUrl: "./templates/highschool.html",
    styleUrls: ["./certificate-info.component.scss"],
})
export class HighschoolCertificateComponent implements OnInit {
    @Input() item: HisghschoolCertificateForm;
    HighSchoolEducationTypes = ConstantsUtils.getHighSchoolEducationTypes();
    HighSchoolBranches: Array<Branch> = ConstantsUtils.getHighSchoolBranches();
    selectedBranch: Branch;
    subBranches: string[] = [];
    constructor(public certificateService: CerificateService) {}
    ngOnInit() {
        this.getBranch();
    }
    isValid(form: NgForm) {
        this.item.isValid = form.valid;
    }
    getBranch() {
        var index = this.HighSchoolBranches.findIndex(
            (b) => b.branch == this.item.mainBranch
        );
        if (index == -1) {
            this.selectedBranch = this.HighSchoolBranches[0];
            this.item.mainBranch = this.selectedBranch.branch;
            this.item.branch = this.selectedBranch.subBranches[0].branch;
            this.item.subBranch =
                this.selectedBranch.subBranches[0].subBranches[0];
            this.subBranches = this.selectedBranch.subBranches[0].subBranches;
        } else {
            this.selectedBranch = this.HighSchoolBranches[index];
            if (this.selectedBranch.subBranches.length) {
                var branchIndex = this.selectedBranch.subBranches.findIndex(
                    (b) => b.branch == this.item.branch
                );
                this.subBranches =
                    this.selectedBranch.subBranches[branchIndex].subBranches;
            }
        }
    }

    onMainBranchChange() {
        this.item.branch = "";
        this.item.subBranch = "";
        this.subBranches = [];
        var index = this.HighSchoolBranches.findIndex(
            (b) => b.branch == this.item.mainBranch
        );
        this.selectedBranch = this.HighSchoolBranches[index];
        if (
            this.selectedBranch.subBranches &&
            this.selectedBranch.subBranches.length
        ) {
            this.item.branch = this.selectedBranch.subBranches[0].branch;
            this.subBranches = this.selectedBranch.subBranches[0].subBranches;
            if (this.subBranches.length)
                this.item.subBranch = this.subBranches[0];
        }
    }

    onBranchChange() {
        this.item.subBranch = "";
        this.subBranches = [];
        var index = this.selectedBranch.subBranches.findIndex(
            (b) => b.branch == this.item.branch
        );
        var branch = this.selectedBranch.subBranches[index];
        if (branch.subBranches && branch.subBranches.length != 0) {
            this.subBranches = branch.subBranches;
            this.item.subBranch = this.subBranches[0];
        }
    }
}

@Component({
    selector: "app-certificate-diploma",
    templateUrl: "./templates/diploma.html",
    styleUrls: ["./certificate-info.component.scss"],
})
export class DiplomaCertificateComponent implements OnInit {
    @Input() item: UndergraduateCertificateForm;
    HighEducationTypes: string[] = ConstantsUtils.getHighEducationTypes();
    HighStudyingTypes: string[] = ConstantsUtils.getHighStudyingTypes();
    ScolarshipsTypes: string[] = ConstantsUtils.getScholarshipTypes();
    constructor(public certificateService: CerificateService) {}
    ngOnInit() {}
    isValid(form: NgForm) {
        this.item.isValid = form.valid;
    }

    onCountryChange(event) {
        this.item.university = this.item.college = this.item.department = "";
        this.certificateService.onCountryChange(event, this.item);
    }
}

@Component({
    selector: "app-certificate-undergraduate",
    templateUrl: "./templates/undergraduate.html",
    styleUrls: ["./certificate-info.component.scss"],
})
export class UndergraduateCertificateComponent implements OnInit {
    @Input() item: UndergraduateCertificateForm;
    HighEducationTypes: string[] = ConstantsUtils.getHighEducationTypes();
    HighStudyingTypes: string[] = ConstantsUtils.getHighStudyingTypes();
    ScolarshipsTypes: string[] = ConstantsUtils.getScholarshipTypes();
    constructor(public certificateService: CerificateService) {}
    ngOnInit() {}
    isValid(form: NgForm) {
        this.item.isValid = form.valid;
    }

    onCountryChange(event) {
        this.item.university = this.item.college = this.item.department = "";
        this.certificateService.onCountryChange(event, this.item);
    }
}

@Component({
    selector: "app-certificate-graduate",
    templateUrl: "./templates/graduate.html",
    styleUrls: ["./certificate-info.component.scss"],
})
export class GraduateCertificateComponent implements OnInit {
    @Input() item: GraduateCertificateForm;
    HighEducationTypes: string[] = ConstantsUtils.getHighEducationTypes();
    HighStudyingTypes: string[] = ConstantsUtils.getHighStudyingTypes();
    ScolarshipsTypes: string[] = ConstantsUtils.getScholarshipTypes();
    constructor(public certificateService: CerificateService) {}
    ngOnInit() {}
    isValid(form: NgForm) {
        this.item.isValid = form.valid;
    }

    onCountryChange(event) {
        this.item.university = this.item.college = this.item.department = "";
        this.certificateService.onCountryChange(event, this.item);
    }
}
