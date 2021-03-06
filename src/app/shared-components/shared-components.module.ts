
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

import { DatepickerComponent,SelectpickerComponent } from './controls/controls';
import { FilesComponent,ImageFileUploader } from './files/files.component';



@NgModule({
  declarations: [
    DatepickerComponent,
    SelectpickerComponent,
    FilesComponent,
    ImageFileUploader
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    BsDatepickerModule.forRoot()
  ],
  exports:[
    DatepickerComponent,
    SelectpickerComponent,
    FilesComponent,
    ImageFileUploader
    
  ],
  providers: [BsDatepickerConfig]

})
export class SharedComponentsModule { }
