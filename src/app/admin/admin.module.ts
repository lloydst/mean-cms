import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AdminComponent,
        ListComponent,
        CreateComponent,
        UpdateComponent,
        FooterComponent,
        HeaderComponent
    ]
})
export class AdminModule { }
