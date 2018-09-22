import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ArticlesService, UserService, Article } from '../core';

import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EditableArticleResolverService implements Resolve<Article> {

  constructor(private router: Router,
              private articlesService: ArticlesService,
              private userService: UserService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.articlesService.get(route.params['slug']).pipe(map(
      article => {
        if (this.userService.getCurrentUser().username === article.author.username) {
          return article;
        } else {
          this.router.navigateByUrl('/');
        }
      }
    ),
    catchError((error) => this.router.navigateByUrl('/'))
    );
  }
}
