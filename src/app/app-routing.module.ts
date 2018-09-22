import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    {
        path: 'article',
        loadChildren: './article/article.module#ArticleModule'
    }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
