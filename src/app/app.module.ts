import { BrowserModule } from '@angular/platform-browser'; //Работа с браузером
import { NgModule } from '@angular/core'; //Декоратор который превращает класс в модуль

import { AppComponent } from './app.component'; //Функциональность корневого компонента

@NgModule({  //Декоратор
  declarations: [AppComponent], //Классы представлений(компоненты, директивы, каналы)
  imports: [BrowserModule], //Что требуется для работы шаблонов компонентов модуля
  providers: [], //Классы, создающие сервисы
  bootstrap: [AppComponent] //Корневой компонент, вызывается по умолчанию при загрузке приложения
})
export class AppModule { }
