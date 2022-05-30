export class Employee{
    /*****  Arabic Name Info *******/ 
    aFirstName:string="";
    aFatherName:String="";
    aGrandFatherName:string="";
    aFourthName:string="";
    aSureName:string="";

    /*****  English Name Info *******/ 
    eFirstName:string="";
    eFatherName:String="";
    eGrandFatherName:string="";
    eFourthName:string="";
    eSureName:string="";

    /*****  Mother Name Info *******/ 
    motherName:string="";

    maritial:Maritial=new Maritial();
    gender:String="ذكر"
    mobile:Number=null;
    email:string="";
    address:Address=new Address();

    getArabicFullName():string{
        return this.aFirstName+" "+this.aFatherName+"  "+this.aGrandFatherName+" "+this.aFourthName+"  "+this.aSureName
    }
    getEnglishFullName():string{
        return this.eFirstName+" "+this.eFatherName+"  "+this.eGrandFatherName+" "+this.eFourthName+"  "+this.eSureName
    }
}

export class Maritial{
    MaritialStatus:string="أعزب";
    marriageDate:Date=new Date()
    partenerName:String="";
    numberOfChilderen:Number=0;
    isPartenerEmployeed:string="نعم";
    children:Array<Child>=[]

    addChild():void{
        var child=new Child();
        this.children.push(child)
    }
    removeChild(i:number):void{
        this.children.splice(i,1)
    }

}
export class Child{
    name:string="";
    birthDate:Date=new Date()
}

export class Address{
    province:string="نينوى";
    county:string="ألموصل";
    city:string="";
    quarter:string="";
    nearestPlace:string="";
    street:string;
    subStreet:string;
    unitNumber:string;
}