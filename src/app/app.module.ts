import { NgModule } from '@angular/core'; //Декоратор который превращает класс в модуль
import { BrowserModule } from '@angular/platform-browser'; //Работа с браузером

import {Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms'; //Работа с формами

import { AppComponent } from './app.component'; //Функциональность корневого компонента
import { LoginComponent }   from './login/index';
import { CatalogComponent } from './catalog/catalog.component';
import { DashboardComponent } from './dashboard/dashboard.component'
import { HomeComponent }   from './home/index'
import { NotFoundComponent }   from './not-found/index';

// определение маршрутов
const appRoutes: Routes =[
  { path: '', component: LoginComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'main', component: AppComponent},
  { path: 'catalog', component: CatalogComponent},
  { path: '**', component: NotFoundComponent }
];

//Декоратор
@NgModule({

    //Корневой компонент, вызывается по умолчанию при загрузке приложения
    bootstrap: [AppComponent],

    //Классы представлений(компоненты, директивы, каналы) для подключения в модуле
    declarations: [AppComponent, HomeComponent, LoginComponent, NotFoundComponent, CatalogComponent, DashboardComponent],

    //Что требуется для работы шаблонов компонентов модуля
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
    ],

    //Классы, создающие сервисы
    providers: [],

})
export class AppModule { }
