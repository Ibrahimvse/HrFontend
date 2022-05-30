import {Files} from "./Files"
export class Certificate{
    certificates:Array<any>=[];
    addCertificate(item:any){
        this.certificates.push(item);
    }
    removeCertificate(item:any){
        var index=this.certificates.indexOf(item)
        this.certificates.splice(index,1)
    }

    isValid():boolean{
        var length=this.certificates.length
        var validCertificates=this.certificates.filter(item=>item.isValid==true).length
        var result= (length!=0 )&&(validCertificates===length)
        return result
    }
}

export class CertificateForm{
    isCurrentCertificate:boolean=false;
    type:string="";
    certificateDate:Date=new Date();
    country:string="ألعراق";
    province:string="نينوى";
    county:string="ألموصب"
    Files:Files=new Files();
    isValid = false;
    constructor(type:string){
        this.type=type;
    }
}
export class ElementryCertificateForm extends CertificateForm{
    schoolName:string="";
    constructor(type:string){
        super(type)
    }
}
export class IntermediateCertificateForm extends ElementryCertificateForm{
    constructor(type:string){
        super(type)
    }

}

export class HisghschoolCertificateForm extends ElementryCertificateForm{
    educationType:string;
    mainBranch:string="";
    branch="";
    subBranch="";
    constructor(type:string){
        super(type)
    }

}

export class UndergraduateCertificateForm extends CertificateForm{
    studyingType:string="";
    educationType:string="";
    university:string="";
    college:string="";
    department:string="";
    gpa:number;
    scholarshipType:string="";
    constructor(type:string){
        super(type)
    }
}

export class GraduateCertificateForm extends CertificateForm{
    
    university:string="";
    college:string="";
    department:string="";
    studyingType:string="";
    educationType:string="";
    generalSpecialization:string="";
    fieldOfSpecialization:string="";
    scholarshipType:string="";
    gpa:number;
    phdType:string=""
    constructor(type:string){
        super(type)
    }
}

