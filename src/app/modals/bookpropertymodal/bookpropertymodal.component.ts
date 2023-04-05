import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
//import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-bookpropertymodal',
  templateUrl: './bookpropertymodal.component.html',
  styleUrls: ['./bookpropertymodal.component.scss']
})
export class BookpropertymodalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BookpropertymodalComponent>, @Inject(MAT_DIALOG_DATA) public data: PropModel) { }

  ngOnInit(): void {
  }

}
export interface PropModel {
  Message: string;
}
