import { Injectable } from "@angular/core";
import {
    Certificate,
    ElementryCertificateForm,
    IntermediateCertificateForm,
    HisghschoolCertificateForm,
    UndergraduateCertificateForm,
    GraduateCertificateForm
} from "../classes/certificate";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { ConstantsUtils } from "../classes/constants";
@Injectable({
    providedIn: "root",
})
export class CerificateService {
    certificateTypes = [
        { title: "شهادة ألابتدائية", type: "elementry", max: 1 },
        { title: "شهادة ألمتوسطة", type: "intermediate", max: 1 },
        { title: "شهادة ألاعدادية", type: "highschool", max: 1 },
        { title: "شهادة معهد", type: "diploma", max: 1 },
        { title: "شهادة بكالوريوس", type: "bachelor", max: 1 },
        { title: "شهادة دبلوم عالي", type: "highdiploma", max: 1 },
        { title: "شهادة ماجستير", type: "master", max: 1},
        { title: "شهادة دكتوراة", type: "phd", max: 1},
    ];
    isCertificateFormSubmitted: boolean = false;
    Certificate: Certificate = new Certificate();
    private countries: string[] = [];
    private provinces: string[] = [];
    constructor() {}
    isContryIraq(country: string): boolean {
        return country == "ألعراق";
    }
    getCities(province: string, item: any): string[] {
        var cities = ConstantsUtils.getProvinceCitiesByName(province);
        return cities;
    }
    onProvinceChange(province: string, item: any) {
        item.county = this.getCities(province, item)[0];
        item.province = province;
    }
    isCertificateMaxReached(type: any) {
        var length = this.Certificate.certificates.filter(
            (item) => item.type == type.type
        ).length;
        return length >= type.max;
    }
    onCountryChange(value: string, item: any) {
        item.country = value;
        item.province = "";
        item.county = "";
        if (this.isContryIraq(item.country)) {
            item.province = this.getProvincesList()[0];
            this.onProvinceChange(item.province, item);
        }
    }
    getProvincesList() {
        if (this.provinces.length == 0) {
            this.provinces = ConstantsUtils.getProvincesList();
        }
        return this.provinces;
    }
    getCountriesList() {
        if (this.countries.length == 0) {
            this.countries = ConstantsUtils.getCountriesList();
        }
        return this.countries;
    }

    hasCertificate() {
        return this.Certificate.addCertificate.length != 0;
    }
    addCertificate(type: any) {
        switch (type) {
            case "elementry": {
                this.Certificate.addCertificate(
                    new ElementryCertificateForm(type)
                );
                break;
            }
            case "intermediate": {
                this.Certificate.addCertificate(
                    new IntermediateCertificateForm(type)
                );
                break;
            }
            case "highschool": {
                this.Certificate.addCertificate(
                    new HisghschoolCertificateForm(type)
                );
                break;
            }
            case "diploma": {
                this.Certificate.addCertificate(
                    new UndergraduateCertificateForm(type)
                );
                break;
            }
            case "bachelor": {
                this.Certificate.addCertificate(
                    new UndergraduateCertificateForm(type)
                );
                break;
            }
            case "highdiploma": {
                this.Certificate.addCertificate(
                    new GraduateCertificateForm(type)
                );
                break;
            }
            case "master": {
                this.Certificate.addCertificate(
                    new GraduateCertificateForm(type)
                );
                break;
            }
            case "phd": {
                this.Certificate.addCertificate(
                    new GraduateCertificateForm(type)
                );
                break;
            }
        }
    }
    dropCertificate(event: CdkDragDrop<string>) {
        if (event.previousContainer !== event.container) {
            this.addCertificate(event.item.data);
            var length = this.Certificate.certificates.length;
            var previousIndex = length > 0 ? length - 1 : 0;
            moveItemInArray(
                this.Certificate.certificates,
                previousIndex,
                event.currentIndex
            );
        } else {
            moveItemInArray(
                this.Certificate.certificates,
                event.previousIndex,
                event.currentIndex
            );
        }
    }
}
