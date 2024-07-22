import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

register()

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent { 
  public appPages = [
    { title: 'Inicial', url: '/home', icon: 'home' },
    { title: 'Notificações', url: '', icon: 'notifications' },  
    { title: 'Configurações', url: '', icon: 'settings' },  
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
