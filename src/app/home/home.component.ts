import {Component, HostListener, OnInit} from '@angular/core';
import {User, Query} from 'leancloud-storage';
import {Router} from '@angular/router';
import {Post} from './post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }
  posts: Post[];
  showDash = false;
  width = window.innerWidth >= 1000;
  user = User.current();
  async fetch(d: number) {
    const q = new Query('post');
    q.lessThanOrEqualTo('createdAt', new Date(d));
    const qs = await q.find();
    console.log(qs);
    qs.sort((x: any, y: any): number => {
      return x.createdAt < y.createdAt ? -1 : 1;
    });
  }
  @HostListener('window:resize') onResize() {
    this.width = (window.innerWidth >= 1000);
  }
  async logout() {
    const result = await User.logOut();
    console.log(result);
    if (result) {
      this.router.navigateByUrl('/Login');
    }
  }
  toggleFAB() {
    setTimeout(() => {
      this.showDash = !this.showDash;
    }, 200);
  }

  ngOnInit() {
    this.fetch(Date.now());
  }
}
