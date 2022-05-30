import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";


import { MatMenuModule } from "@angular/material/menu";
import { DragDropModule } from "@angular/cdk/drag-drop";



@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [
        MatMenuModule,
        DragDropModule
    ],
    providers: [
 
    ],
})
export class MaterialModule {}
