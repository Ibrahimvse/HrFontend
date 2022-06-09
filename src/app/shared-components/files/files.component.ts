import {
    Component,
    OnInit,
    EventEmitter,
    Output,
    Input,
    ViewChild,
    ElementRef,
    HostListener,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import {
    Files,
    DatabaseFile,
    ImageDimension,
    ImageFile,
} from "../../classes/Files";

import {  
    DomSanitizer  
} from '@angular/platform-browser';
//declare const $: any;
@Component({
    selector: "app-files",
    templateUrl: "./files.component.html",
    styleUrls: ["./files.component.scss"],
})
export class FilesComponent implements OnInit {
    @Input() Files: Files;
    @Input() header: string;
    DataFiles: Array<DatabaseFile> = [];
    id:string="files"
    constructor() {}

    ngOnInit(): void {
        this.id=this.setElementId("files");
        this.DataFiles.push(new DatabaseFile());
        this.DataFiles.push(new DatabaseFile());
        this.DataFiles.push(new DatabaseFile());
    }

    onChange(frm: NgForm) {}
    onFileSelected(i: number, event: any) {
        if (event.target.files.length > 0) {
            this.Files.Filelist[i] = <File>event.target.files[0];
        }
    }
    removeDataFile(i: number) {
        this.DataFiles.splice(i, 1);
    }

    setElementId(name:string):string{
        var id = name + Math.round(Math.random() * 100000);
         return id;
     }
}

@Component({
    selector: "app-files-ImageFileUploader",
    templateUrl: "./ImageFileUploader.html",
    styleUrls: ["./files.component.scss"],
})
export class ImageFileUploader implements OnInit {
    @Input() image: ImageFile;
    @Input() dimensions: ImageDimension;
    @Output("file") file: EventEmitter<ImageFile> = new EventEmitter();

    @ViewChild("inputfile") private inputfile: ElementRef<HTMLInputElement>;
    private isOver = false;
    constructor(private sanitizer: DomSanitizer) {}
    ngOnInit(): void {
        console.log(this.image)
    }

    @HostListener("click") private onClick() {
        this.inputfile.nativeElement.click();
    }


    @HostListener("drop", ["$event"]) private onDrop(event: DragEvent) {
        this.onDrag(event);
        if (event.dataTransfer.files) {
            this.image.file = <File>event.dataTransfer.files[0];
            this.image.url=this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.image.file));
        }
    }

    onFileSelected(event: any) {
        if (event.target.files.length > 0) {
            this.image.file = <File>event.target.files[0];
            this.image.url=this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.image.file));
        }
    }

    @HostListener("drag", ["$event"])
    @HostListener("dragstart", ["$event"])
    @HostListener("dragenter", ["$event"])
    @HostListener("dragover", ["$event"])
    @HostListener("dragleave", ["$event"])
    @HostListener("dragend", ["$event"])
    private onDrag(event: DragEvent) {
        event.stopPropagation();
        event.preventDefault();

        this.isOver = ["dragenter", "dragover"].includes(event.type);
    }
}
