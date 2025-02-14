import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { NCalendar } from '../../model/calendar.model';

@Component({
  selector: 'app-calendar',
  imports: [MatButtonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {

  headers: NCalendar.Header = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

  private totalItems = 42;

  private date = new Date();

  calendarData: NCalendar.Body[] = [];

  constructor() {
    this.createCalendarData();
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
