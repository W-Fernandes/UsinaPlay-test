import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerComponent {
  @Input() slides: any[] = [];
  @Input() withOpacity: boolean = true;
  @Input() tipo: string = '';

  swiperModules = [IonicSlides];

  constructor() { }
}
