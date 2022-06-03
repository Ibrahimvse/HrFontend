import {Files, ImageDimension, ImageFile} from "./Files"
export class Documents{
    documents:Array<any>=[];
    addDocument(item:any){
        this.documents.push(item);
    }
    removeDocument(item:any){
        var index=this.documents.indexOf(item)
        this.documents.splice(index,1)
    }

    isValid():boolean{
        var length=this.documents.length
        var validDocuments=this.documents.filter(item=>item.isValid==true).length
        var result= (length!=0 )&&(validDocuments===length)
        return result
    }
}

export class Document{
    type:string=""
    isValid:boolean=false;
    constructor(type:string){
        this.type=type;
    }
}

export class NationalId extends Document{
    faceOne:ImageFile=new ImageFile();
    faceTwo:ImageFile=new ImageFile();
    dimensions:ImageDimension;
    nationalIdNumber:string="198895861059"
    name:string="أبراهيم"
    father:string="جميل"
    grandFather:string="مجهد"
    sureName:string="رشيد"
    mother:string="فائزة"
    grandMother:string="صالح"
    gender:string="ذكر"
    bloodCategory:string="+O"
    idNumber:string="AT7013262"
    issuer:string="مديرية ألجنسية و ألمعلومات ألمدنية"
    issueDate:string="2019/10/09"
    expirationDate:string="2029/10/08"
    placeOfBirth:string="رمادي-ألانبار"
    dateOfBirth:string="1988/13/12"
    familyIdNumber:string="1103L00M2470013601"

    constructor(type:string){
        super(type)
        this.dimensions={width:"400px !important",height:"250px !important"}
    }

}
export class Passport extends Document{
    faceOne:ImageFile=new ImageFile();
    dimensions:ImageDimension;
    passportNumber:string="A14097190";
    passportType:string="P"
    arabicFullName:string="أبراهيم جميل مجهد"
    englishFullName:string="IBRAHIM JAMEEL MUJHID"
    country:string="IRQ"
    arabicSurname:string="مجهد"
    englishSurname:string="MUJHID"
    arabicNationality:string="عراقي"
    englishNationality:string="IRAQI"
    arabicGender:string="ذكر"
    englishGender:string="M"
    arabicMotherName:string="فائزة صالح"
    englishMotherName:string="FAEZZA SALEH"
    issueDate:string="2018-08-20"
    expirationDate:string="2026-08-19"
    dateOfBirth:string="1988-12-13"
    arabicIssuer:string="ألأنبار"
    englishIssuer:string="Anbar"
    placeOfBirth:string="ألعراق-ألانبار"
    placeOfBirthCountry:string="IRQ"
    

    constructor(type:string){
        super(type)
        this.dimensions={width:"400px !important",height:"500px !important"}
    }
}
export class RationCard extends Document{
    faceOne:ImageFile=new ImageFile();
    dimensions:ImageDimension;
    province:string="ألانبار";
    fromYear:number=2020;
    toYear:number=2021;
    cardNumber:string="0282955"
    houseHoldName="جميل مجهد رشيد";
    numberOfFamilyMembers:number;
    address:{m:string,z:string,d:string}={
        m:"1",
        z:"7",
        d:"5"
    }
    rationCenterNumber:string="556";
    rationCenterName:string="ألخالدية";
    foodAgentNumber:string="001265";
    foodAgentName="عبد ألرحمن حميد بداع";
    wheatAgentNumber:string="000186";
    wheatAgentName:string="محمد عبد جاسم";
    issueDate:string="1/1/2020"
    familyMembers:string[]=[
        "جميل مجهد رشيد",
        "أسماعيل جميل مجهد",
        "علي جميل مجهد",
        "أبراهيم جميل مجهد",
        "أحمد جميل مجهد",
        "ألحسن علي جميل",
        "محمد أمين أسماعيل جميل",
    ]


    constructor(type:string){
        super(type)
        this.dimensions={width:"400px !important",height:"750px !important"}
        this.numberOfFamilyMembers=this.familyMembers.length;

    }
    addMember(){
        this.familyMembers.push("");
    }
    removeMember(i:number){
        this.familyMembers.splice(i,1);
    }
}

export class CertificateOfNationality extends Document{
    faceOne:ImageFile=new ImageFile();
    dimensions:ImageDimension;
    walletNumber:string="ج 2007/8532";
    certificateDate:string="28-10-2007"
    certificateNumber:string="0333424/د"
    name:string="أبراهيم جميل مجهد"
    dateAndPlaceOfBirth:string="ألرمادي - 1988"
    religion:string="مسلم"
    defects:string="بلا"
    fatherName:string="جميل مجهد"
    fatherPlaceOfBirth:string="ألحبانية"
    motherName:string="فائزة صالح"
    motherPlaceOfBirth:string="ألرمادي"

    constructor(type:string){
        super(type)
        this.dimensions={width:"400px !important",height:"500px !important"}
    }
}
export class UniversityId extends Document{
    faceOne:ImageFile=new ImageFile();
    faceTwo:ImageFile=new ImageFile();
    dimensions:ImageDimension;
    constructor(type:string){
        super(type)
        this.dimensions={width:"400px !important",height:"350px !important"}
    }
}
export class CivilId extends Document{
    faceOne:ImageFile=new ImageFile();
    faceTwo:ImageFile=new ImageFile();
    dimensions:ImageDimension;
    office:string="ألحبانية";
    recordNumber:string="247 م";
    sheetNumber:string="136";
    cardNumber:string="00347042";
    name:string="أبراهيم";
    fatherName:string="جميل مجهد";
    motherName:string="فائزة صالح";
    sureName:string="";
    gender:string="ذكر";
    employeeName:string="";
    issueDate:string="03/01/2010";
    officerName:string="عباس عبدالله مطلك"

    job:string="أستاذ جامعي";
    religion:string="مسلم"
    dateOfBirth:string="13/12/1988"
    dateOfBirthWritten:string="تسعمائة وثمانية وثمانون"
    placeOfBirth:string="رمادي-ألانبار"
    maritialStatus:string="أعزب";
    partenerName:string=""
    placeOfRecording:string="ألحبانية"
    defects:string=""
    eyeColor:string="بني"
    faceColor:string="أبيض"
    hairColor:string="أسود"
    length:string="170"
    blood:string="+O"
    constructor(type:string){
        super(type)
        this.dimensions={width:"400px !important",height:"400px !important"}
    }
}
export class AddressCard extends Document{
    faceOne:ImageFile=new ImageFile();
    faceTwo:ImageFile=new ImageFile();
    dimensions:ImageDimension;
    informationOffice:string="ألحبانية";
    householdName:string="جميل مجهد رشيد";
    address:{m:string,z:string,d:string}={
        m:"1",
        z:"7",
        d:"5"
    }
    cardNumber:number=28578;
    cardType:string="3"
    char:string="أ"
    sequence:number=2871528;
    issueDate:string="27/01/2015"
    officerName:string="سرمد جمعة مهيدي"

    constructor(type:string){
        super(type)
        this.dimensions={width:"400px !important",height:"250px !important"}
    }
}