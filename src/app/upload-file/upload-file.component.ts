import { Component, OnInit, ViewChild } from '@angular/core';
import {ConsumerServices} from '../Services/ConsumerServices';
import {SaveRegisterI} from '../Models/SaveRegistersInterface';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {
  FileName:string;
   
  constructor(private consumerServices:ConsumerServices ) { }
  ngOnInit(): void {
  
  }
  upload(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files as FileList;
    files[0].name;
    this.getBase64(files[0]);
    console.log(files);
  }
  async getBase64(file:any) {
    var reader = new FileReader();
    let  DataString;
    this.FileName = file.name;
    reader.readAsDataURL(file);
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.onerror = function (error) {
    console.log('Error: ', error);
  };

  
}
_handleReaderLoaded(event:any) {
   var binaryString:string = event.target.result;
   binaryString = binaryString.replace("data:text/csv;base64,","");
   var datos  = [];
   datos.push({ 
    "FileName"    : this.FileName,
    "File"  : binaryString,
   });
   var datosforJSon = datos[0];
   let Json = JSON.stringify(datosforJSon);
   this.consumerServices.SaveRegisters(Json).subscribe(data =>{
     console.log(data)
   }); 
}
 
}










