import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})

export class     LoginModalComponent
  implements OnInit {
  screenID: number = 0;
  constructor(public dialogRef: MatDialogRef<LoginModalComponent>, @Inject(MAT_DIALOG_DATA) public data: LogModel) { }

  ngOnInit(): void {
    this.screenID = 0;
  }
  screen0Next() {
    this.screenID = 1;
  }
  screen1Next() {
    this.screenID = 2;
  }
  screen1back() {
    this.screenID = 0;
  }
}
export interface LogModel {
  Message: string;
}
