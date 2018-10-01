import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  groups = ['划水', '主席团', '管理员', '系统管理员'];
  input = new User();

  constructor(
    public http: HttpClient
  ) {
  }

  join = () => {
    console.log('/api/user/add');
    console.log(this.input);
    this.http.post('/api/user/add', this.input);
  };

  ngOnInit() {
  }
}
