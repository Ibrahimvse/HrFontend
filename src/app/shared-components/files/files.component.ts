import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Files, DatabaseFile } from "../../classes/Files";
//declare const $: any;
@Component({
    selector: "app-files",
    templateUrl: "./files.component.html",
    styleUrls: ["./files.component.scss"],
})
export class FilesComponent implements OnInit {
    @Input() Files: Files;
    @Input() header:string;
    DataFiles: Array<DatabaseFile> = [];
    constructor() {}

    ngOnInit(): void {
        this.DataFiles.push(new DatabaseFile());
        this.DataFiles.push(new DatabaseFile());
        this.DataFiles.push(new DatabaseFile());
    }

    onChange(frm: NgForm) {}
    onFileSelected(i: number, event:any) {
        if (event.target.files.length > 0) {
            this.Files.Filelist[i] = <File>event.target.files[0];
        }
    }
    removeDataFile(i:number){
        this.DataFiles.splice(i,1)
    }
}
