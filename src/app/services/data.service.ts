import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserData, Slide, Notification } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url:string = 'assets/img/banners/img'

  constructor() { }

  getUserData(): Observable<UserData> {
    const userData: UserData = {
      name_user: 'Leonardo Santos',
      avatar: 'assets/img/avatar.jpg',
      nivel: 'Nível Roxo',
    };
    return of(userData);
  }


  getSlides(): Observable<Slide[]> {
    const slides: Slide[] = [
      { banner: `${this.url}1.jpg`, label: 'LEVANTAMENTO DE PESO' },
      { banner: `${this.url}2.jpg`, label: 'YOGA EXPRESS' },
      { banner: `${this.url}3.jpg`, label: 'CROSSFIT' },
      { banner: `${this.url}4.jpg`, label: 'TREINO LIVRE' },
      { banner: `${this.url}6.jpg`, label: 'MUAY THAI' },
    ];
    return of(slides);
  }

  getNotifications(): Observable<Notification[]> {
    const notifications: Notification[] = [
      { titulo: 'Treinamento', mensagem: 'Treino de levantamento de peso faça agora mesmo seu treino.', lido: false },
      { titulo: 'Plano', mensagem: 'Altere seu plano e adquira ainda mais descontos em nossos parceiros.', lido: true },
      { titulo: 'Cupom', mensagem: 'Aproveite agora mesmo seu cupom de desconto para utilizar na academia próxima a você.', lido: true },
    ];
    return of(notifications);
  }
  
}
