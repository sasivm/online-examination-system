import { Component, OnInit } from '@angular/core';
import { ExcelReaderService } from '../services/excel-reader.service';

@Component({
  selector: 'app-upload-ques',
  templateUrl: './upload-ques.component.html',
  styleUrls: ['./upload-ques.component.scss']
})
export class UploadQuesComponent implements OnInit {

  excelArray: any = [];
  constructor(private _excelReader: ExcelReaderService) { }

  ngOnInit(): void {
  }

  uploadedFile(uploadedFileEvent: any) {
    const file: File = uploadedFileEvent.target.files[0];

    /* wire up file reader */
    this._excelReader.checkExcelFile(uploadedFileEvent).then(data => {
      this.excelArray = data;
      console.log('Successfully data extracted');
      console.log(this.excelArray);
    }).catch(error => {
      console.log('Error Ocuured while parsing Excel');
      console.log(error);
    });
  }



}
