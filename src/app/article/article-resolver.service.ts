import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { UserService, ArticlesService, Article } from '../core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticleResolver implements Resolve<Article> {

  constructor(private router: Router,
              private articleService: ArticlesService,
              private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
          return this.articleService.get(route.params['slug'])
                                    .pipe(catchError((error) => this.router.navigateByUrl('/')));
  }
}
