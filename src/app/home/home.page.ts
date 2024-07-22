import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BannerComponent } from './components/banner/banner.component'; 
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { UserData, Slide, Notification } from '../models';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, BannerComponent, HeaderComponent, CommonModule]
})
export class HomePage implements OnInit {
  slides: Slide[] = [];
  notifications: Notification[] = [];
  user_data: UserData = { name_user: '', avatar: '', nivel: '' };

  personal: string = 'personal';
  programa: string = 'programa';
  conteudo:string = 'conteudo';


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
   
    // GET SLIDES
    this.dataService.getSlides().subscribe(data => {
      this.slides = data;
    });

  }
}
