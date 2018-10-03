import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {User} from 'leancloud-storage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private dialog: MatDialog, private router: Router) {
  }

  public input = {
    username: '',
    pwd: ''
  };
  async lg() {
    console.log(this.input);
    try {
      const result = await User.logIn(this.input.username, this.input.pwd);
      console.log(result);
    } catch (e) {
      console.log(e);
      errmsg = e.toString();
      this.dialog.open(LoginErrDialogComponent);
      return;
    }
    this.router.navigateByUrl('/Home');
  };


  ngOnInit() {
  }

}

let errmsg = '';

@Component({
  selector: 'app-err-dialog',
  template: '<p style="text-align: center;">{{msg}}</p>' +
            '<p style="float: right;"><button mat-button (click)="onClose();">关闭</button></p>'
})
export class LoginErrDialogComponent {
  constructor(public dialogRef: MatDialogRef<LoginErrDialogComponent>) {
  }
  msg = errmsg;

  public onClose() {
    this.dialogRef.close();
  }
}
