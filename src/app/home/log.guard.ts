import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Query, User} from 'leancloud-storage';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LogGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (User.current() != null) {
      return true;
    } else {
      this.router.navigateByUrl('/Login');
      return false;
    }
  }
}
