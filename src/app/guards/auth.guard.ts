//import { Injectable } from '@angular/core';
//import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
//import { Observable } from 'rxjs';
//import { map, take } from 'rxjs/operators';
//import { AuthService } from '../services/auth.service';

//@Injectable({
 // providedIn: 'root'
//})
//export class AuthGuard implements CanActivate {
 // constructor(private authService: AuthService, private router: Router) {}

 // canActivate(
 //   route: ActivatedRouteSnapshot,
 //   state: RouterStateSnapshot): Observable<boolean | UrlTree> {
 //   return this.authService.getUser().pipe(
//      take(1),
//      map(user => {
//        if (user) {
//          return true;
//        } else {
//          this.router.navigateByUrl('/login');
//          return false;
//        }
//      })
//    );
//  }
//}
