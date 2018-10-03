import {Component, HostListener, OnInit, ViewChild, NgZone} from '@angular/core';
import {User, Query, Role} from 'leancloud-storage';
import {Router} from '@angular/router';
import {Post} from './post';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

let isPublic = false;
let isAdmin = false;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private sheet: MatBottomSheet) {
  }
  posts: Post[] = [];
  showDash = false;
  user = User.current();
  width = window.innerWidth >= 1000;
  async fetch(d: number) {
    const q = new Query('post');
    q.lessThanOrEqualTo('createdAt', new Date(d));
    const qs = await q.find();
    console.log(qs);
    qs.sort((x: any, y: any): number => {
      return x.createdAt < y.createdAt ? -1 : 1;
    });
    qs.forEach((x: any) => {
      this.posts.push(new Post(
        x.id,
        x.attributes.content,
        x.attributes.name,
        x.attributes.pic,
        x.attributes.bio,
        x.attributes.up,
        x.attributes.down,
        x.createdAt));
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
  toggleEditor() {
    this.sheet.open(SheetComponent);
  }

  async ngOnInit() {
    this.fetch(Date.now());
    const role = await this.user.getRoles();
    console.log(role);
    role.forEach(x => {
      if (x.attributes.name === 'admin') {
        isAdmin = true;
      }
      if (x.attributes.name === 'public') {
        isPublic = true;
      }
    });
  }
}

@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css']
})
export class SheetComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<SheetComponent>, private ngZone: NgZone) {}
  post = new Post();
  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
      .subscribe(() => this.autosize.resizeToFitContent(true));
  }
}

