import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ProfilesService, Profile } from '../core';

import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<Profile> {

  constructor(private router: Router,
              private profilesService: ProfilesService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
      return this.profilesService.get(route.params['username'])
                 .pipe(catchError((error) => this.router.navigateByUrl('/')));
  }
}
