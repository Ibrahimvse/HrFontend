import { Injectable } from "@angular/core";
import {
    Documents,
    NationalId,
    RationCard,
    AddressCard,
    CivilId,
    UniversityId,
    Passport,
    CertificateOfNationality,
} from "../classes/officialdocuments";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { ConstantsUtils } from "../classes/constants";
@Injectable({
    providedIn: "root",
})
@Injectable({
    providedIn: "root",
})
export class OfficialDocumentsService {
    Documents: Documents = new Documents();

    documentTypes = [
        { title: "ألبطاقة ألوطنية", type: "national-id", max: 1 },
        { title: "هوية ألاحوال ألمدنية", type: "civil-id", max: 1 },
        { title: "بطاقة ألسكن", type: "address-card", max: 1 },
        {
            title: "ألجنسية ألعراقية",
            type: "certificate-of-nationality",
            max: 1,
        },
        { title: "ألبطاقة ألتموينية", type: "ration-card", max: 1 },
        { title: "جواز ألسفر", type: "passport", max: 1 },
        { title: "ألهوية ألجامعية", type: "university-id", max: 1 },
    ];
    constructor() {}
    addDocuments(type: any) {
        switch (type) {
            case "national-id": {
                this.Documents.addDocument(new NationalId(type));
                break;
            }
            case "civil-id": {
                this.Documents.addDocument(new CivilId(type));
                break;
            }
            case "university-id": {
                this.Documents.addDocument(new UniversityId(type));
                break;
            }
            case "certificate-of-nationality": {
                this.Documents.addDocument(new CertificateOfNationality(type));
                break;
            }
            case "ration-card": {
                this.Documents.addDocument(new RationCard(type));
                break;
            }
            case "address-card": {
                this.Documents.addDocument(new AddressCard(type));
                break;
            }
            case "passport": {
                this.Documents.addDocument(new Passport(type));
                break;
            }
        }
    }

    isDocumentMaxReached(type: any) {
        var length = this.Documents.documents.filter(
            (item) => item.type == type.type
        ).length;
        return length >= type.max;
    }

    dropDocument(event: CdkDragDrop<string>) {
        if (event.previousContainer !== event.container) {
            this.addDocuments(event.item.data);
            var length = this.Documents.documents.length;
            var previousIndex = length > 0 ? length - 1 : 0;
            moveItemInArray(
                this.Documents.documents,
                previousIndex,
                event.currentIndex
            );
        } else {
            moveItemInArray(
                this.Documents.documents,
                event.previousIndex,
                event.currentIndex
            );
        }
    }
}
