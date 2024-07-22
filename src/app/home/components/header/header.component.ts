import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserData, Notification } from '../../../models';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeaderComponent {

  user_data: UserData = { name_user: '', avatar: '', nivel: '' };
  notifications: Notification[] = [];


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    
    // GET DADOS USER
    this.dataService.getUserData().subscribe(data => {
      this.user_data = data;
    });


    // GET NOTIFICAÇÕES
    this.dataService.getNotifications().subscribe(data => {
      this.notifications = data;
    });
  }

}
