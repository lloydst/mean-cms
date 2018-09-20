import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { AdminComponent } from './admin/admin.component';
import { PageBuilderComponent } from './page-builder/page-builder.component';

const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
    },
    {
        path: 'style', component: StyleGuideComponent // temp / dev only // WIP basicly always
    },
    {
        path: ':page', component: PageBuilderComponent // !!!NEEDS TO BE LAST (or other routes wont work)!!! builds pages from json
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
