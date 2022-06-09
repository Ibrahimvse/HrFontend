import { Component, OnInit, EventEmitter, Output, Input,AfterViewInit , OnChanges, SimpleChanges} from "@angular/core";
import {defineLocale} from 'ngx-bootstrap/chronos'
import {BsLocaleService} from 'ngx-bootstrap/datepicker'
import {arLocale} from 'ngx-bootstrap/locale'
defineLocale('ar',arLocale)

declare const $: any;

class util{
    static setElementId(name:string):string{
       var id = name + Math.round(Math.random() * 10000);
        return id;
    }
    static setElementLabel(label:string):string{
        return label+" : "
     }
}
@Component({
    selector: "app-datepicker",
    templateUrl: "./templates/datepicker.html",
    styleUrls: ["./controls.scss"],
})
export class DatepickerComponent implements OnInit {
    @Input() input: Date;
    @Input() name: string;
    @Input() label: string;
    @Input() max: Date;
    @Output() dateChange = new EventEmitter<Date>();
    id: string="";
    constructor(private bsLocaleService:BsLocaleService) {
        this.bsLocaleService.use('ar')
    }

    ngOnInit(): void {
        this.id = util.setElementId(this.name);
        this.label =util.setElementLabel(this.label)
    }
    onDateChange(event:any):void{
        this.dateChange.emit(event);
    }

}


@Component({
    selector: "app-selectpicker",
    templateUrl: "./templates/selectpicker.html",
    styleUrls: ["./controls.scss"],
})
export class SelectpickerComponent implements OnInit,AfterViewInit {

    @Input() values: string[];
    @Input() selected:string;
    @Input() name: string;
    @Input() label: string;
    @Output() valueChange = new EventEmitter<string>();
    id:string="";
    constructor() {}

    ngOnInit(): void {
        this.id = util.setElementId(this.name);
        this.label =util.setElementLabel(this.label)
        $(".selectpicker").selectpicker("refresh");
    }
    ngAfterViewInit() {
        $(".selectpicker").selectpicker("refresh");
        
    }
    onChange(value:string){
        this.valueChange.emit(value)
    }
}
