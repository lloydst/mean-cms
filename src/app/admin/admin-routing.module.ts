import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { AdminComponent } from './admin.component';

const routes: Routes = [
    { path:'', component: AdminComponent, redirectTo:'list'}, // Admin component is only used for its router-outlet tag
    { path: 'list', component: ListComponent },
    { path: 'create', component: CreateComponent },
    { path: 'update/:id', component: UpdateComponent}
];

//taken from angular.io
//Only call RouterModule.forRoot in the root AppRoutingModule (or the AppModule if 
//that's where you register top level application routes). In any other module, you 
//must call the RouterModule.forChild method to register additional routes.
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }