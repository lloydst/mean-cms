import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { AdminComponent } from './admin.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
    { path: '', redirectTo: 'list' },
    // it has to be done this way having the redirectTo on the same one as the one with children will not route a child route
    {
        path: '', component: AdminComponent, children: [
            { path: 'list', component: ListComponent },
            { path: 'create', component: CreateComponent },
            { path: 'update/:id', component: UpdateComponent },
            { path: 'footer', component: FooterComponent },
            { path: 'header', component: HeaderComponent }
        ]
    }, // Admin component is only used for its router-outlet tag (so admin nav can be there)

];


@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }