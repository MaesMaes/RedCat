import { NgModule } from '@angular/core'; //Декоратор который превращает класс в модуль
import { BrowserModule } from '@angular/platform-browser'; //Работа с браузером

import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component'; //Функциональность корневого компонента
import { LoginComponent }   from './login.component'
import { HomeComponent }   from './home.component'
import { NotFoundComponent }   from './not-found.component';

// определение маршрутов
const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: '**', component: NotFoundComponent }
];

//Декоратор
@NgModule({

  //Классы представлений(компоненты, директивы, каналы)
  declarations: [AppComponent, HomeComponent, LoginComponent, NotFoundComponent],

  //Что требуется для работы шаблонов компонентов модуля
  imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
  ],

  //Классы, создающие сервисы
  providers: [],

  //Корневой компонент, вызывается по умолчанию при загрузке приложения
  bootstrap: [AppComponent]
})
export class AppModule { }
