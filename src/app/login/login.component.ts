import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private dialog: MatDialog) {
  }

  public input = {
    username: '',
    pwd: ''
  };
  public lg = function () {
    console.log(this.input);
    if (this.input.username === '' || this.input.pwd === '') {
      this.dialog.open(ErrDialogComponent);
    }
  };


  ngOnInit() {
  }

}

@Component({
  selector: 'app-err-dialog',
  template: '<p style="text-align: center;">请完整填写表单</p><button mat-button (click)="onClose();">关闭</button>'
})
export class ErrDialogComponent {
  constructor(public dialogRef: MatDialogRef<ErrDialogComponent>) {
  }

  public onClose = function () {
    this.dialogRef.close();
  };
}
