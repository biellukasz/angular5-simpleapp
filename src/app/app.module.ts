import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppService } from './app.service';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { AppComponent } from './app.component';
import {EquipmentService} from "./equipment.service";
import {EquipmentComponent} from "./equipments/equipment.component";
import {EquipmentListComponent} from './equipments/equipment-list/equipment-list.component';
import { EquipmentManagerComponent } from './equipments/equipment-manager/equipment-manager/equipment-manager.component';

@Injectable()
export class XhrInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const xhr = req.clone({
      headers: req.headers.set('X-Requested-With', 'XMLHttpRequest')
    });
    return next.handle(xhr);
  }
}

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'storehouse', component: EquipmentComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EquipmentComponent,
    EquipmentListComponent,
    EquipmentManagerComponent


],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AppService,{ provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true },EquipmentService],
  bootstrap: [AppComponent],

})
export class AppModule { }

