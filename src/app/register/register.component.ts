import {Component, OnInit} from '@angular/core';
import {User} from 'leancloud-storage';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  input = {
    username: '',
    email: '',
    pwd: ''
  };

  constructor(private dialog: MatDialog) {
  }

  async join() {
    console.log(this.input);
    const user = new User();
    user.setEmail(this.input.email);
    user.setPassword(this.input.pwd);
    user.setUsername(this.input.username);
    try {
      const result = await user.signUp();
      console.log(result);
    } catch (e) {
      errmsg = e.toString();
      this.dialog.open(RegisterErrDialogComponent);
      return;
    }
  }

  ngOnInit() {
  }
}

let errmsg = '';

@Component({
  selector: 'app-err-dialog',
  template: '<p style="text-align: center;">{{msg}}</p><button mat-button (click)="onClose();">关闭</button>'
})
export class RegisterErrDialogComponent {
  constructor(public dialogRef: MatDialogRef<RegisterErrDialogComponent>) {
  }
  msg = errmsg;

  public onClose() {
    this.dialogRef.close();
  }
}
