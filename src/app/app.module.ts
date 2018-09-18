import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StyleGuideComponent } from './style-guide/style-guide.component';
import { HeaderComponent } from './header/header.component';
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
//import { AdminComponent } from './admin/admin.component';
import { PageBuilderComponent } from './page-builder/page-builder.component';
//import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    StyleGuideComponent,
    HeaderComponent,
    TopnavComponent,
    FooterComponent,
    //AdminComponent,
    PageBuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    //AdminModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
