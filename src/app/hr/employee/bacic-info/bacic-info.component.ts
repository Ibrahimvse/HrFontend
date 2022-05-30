import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Employee } from "../../../classes/employee";
import {ConstantsUtils} from "../../../classes/constants";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
declare var $:any;
@Component({
    selector: "app-bacic-info",
    templateUrl: "./bacic-info.component.html",
    styleUrls: ["./bacic-info.component.scss"],
})
export class BacicInfoComponent implements OnInit {
    employee: Employee = new Employee();
    MaritialStatuses:string[]=ConstantsUtils.getMaritialStatuses();
    provinces:string[]=ConstantsUtils.getProvincesList();
    cities:string[]=[];
    public myCities$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

    constructor() {}

    ngOnInit(): void {
        this.onProvinceChange(this.employee.address.province)
    }
    submit(frm:NgForm){
    }

    onProvinceChange(province:any) {
        //$(".selectpicker").selectpicker();  
        this.cities=ConstantsUtils.getProvinceCitiesByName(province);
        this.employee.address.province=province
        console.log(this.cities)
            
    }
    print(){
        window.print();
    }
}
