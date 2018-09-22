import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    {
        path: 'settings',
        loadChildren: './settings/settings.module#SettingsModule'
    },
    {
        path: 'editor',
        loadChildren: './editor/editor.module#EditorModule'
    },
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
