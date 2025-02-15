import { Component, effect } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { NCalendar } from '../../model/calendar.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calendar',
  imports: [
    MatButtonModule,
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

  
  private totalItems = 42;

  private date = new Date();

  private findEvent = findEvent;

  headers: NCalendar.Header = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  calendarData: NCalendar.Body[] = [];

  constructor(private readonly dialogService: DialogService) {
    this.createCalendarData();
    effect(() => {
      if (this.dialogService.getEvent) {
        this.handleEvent(this.dialogService.getEvent);
      }
    });
  }


  

  createCalendarData() {
    //throw new Error('Method not implemented.');

    const firstDayInMonth = this.getSelectDate(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
    const daysPreviusMonth = this.getSelectDate(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
    
    //Adaptamos el for para poder ver la semana anterior al mes actual
    for (let index = firstDayInMonth; index > 0; index--) {
      this.calendarData.push({day: daysPreviusMonth - (index - 1)}); 
    }
    
    const daysInMonth = this.getSelectDate(this.date.getFullYear(),this.date.getMonth() + 1, 0).getDate();

    for (let index = 1; index <= daysInMonth; index++) {
      this.calendarData.push({
        day: index,
      });
    }
  }

  private getSelectDate(year: number, month: number, day: number): Date {
    return new Date(year, month, day);
  }

  openModal(){

  }

}
