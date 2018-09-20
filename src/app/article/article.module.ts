import { NgModule } from '@angular/core';

import { SharedModule } from '../shared';
import { ArticleRoutingModule } from './article-routing.module';

import { ArticleComponent } from './article.component';
import { ArticleCommentComponent } from './article-comment/article-comment.component';
import { MarkdownPipe } from './markdown.pipe';

@NgModule({
  imports: [
    SharedModule,
    ArticleRoutingModule
  ],
  declarations: [ArticleComponent, ArticleCommentComponent, MarkdownPipe]
})
export class ArticleModule { }
