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

  calendarData = new Array(42).fill(1);

  openModal(){

  }

}
