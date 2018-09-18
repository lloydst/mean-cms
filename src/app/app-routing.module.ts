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
        path: 'admin', component: AdminComponent
    },
    {
        path: 'style', component: StyleGuideComponent
    },
    {
        path: ':page', component: PageBuilderComponent
    },



];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
