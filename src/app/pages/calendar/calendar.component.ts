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
    console.log(this.getSelectDate(this.date.getFullYear(),this.date.getMonth(), 1))
  }

  private getSelectDate(year: number, month: number, day: number): Date {
    return new Date(year, month, day);
  }

  openModal(){

  }

}
