import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { ArticlesService, UserService, Article } from '../../../core';

import { of } from 'rxjs';
import { concatMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-favorite-button',
  templateUrl: './favorite-button.component.html',
  styleUrls: ['./favorite-button.component.css']
})
export class FavoriteButtonComponent {
  @Input() article: Article;
  @Output() toggle = new EventEmitter<boolean>();
  isSubmitting = false;

  constructor(private router: Router,
              private articlesService: ArticlesService,
              private userService: UserService) {}

  toggleFavorite() {
    this.isSubmitting = true;
    this.userService.isAuthenticated.pipe(concatMap(
      (authenticated) => {
        if (!authenticated) {
          this.router.navigateByUrl('/login');
          return of(null);
        }
        if (!this.article.favorited) {
          return this.articlesService.favorite(this.article.slug).pipe(tap(
            data => {
              this.isSubmitting = false;
              this.toggle.emit(true);
            },
            error => this.isSubmitting = false
          ));
        } else {
          return this.articlesService.unfavorite(this.article.slug).pipe(tap(
            data => {
              this.isSubmitting = false;
              this.toggle.emit(false);
            },
            error => this.isSubmitting = false
          ));
        }
      }
    )).subscribe();
  }
}
