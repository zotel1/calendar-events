import { Component, effect } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { NCalendar } from '../../model/calendar.model';
import { CommonModule, formatDate } from '@angular/common';

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

  private handleEvent(item: NCalendar.IEvent) {
    const newCalendarData = [...this.calendarData];

    const findEvent = this.findEvent(newCalendarData, item);

    if(!findEvent) {
      createEvent(newCalendarData, item); 
    } else {
      updateEvent(newCalendarData, item, findEvent);
    }

    this.calendarData = newCalendarData;
  } 

  createCalendarData() {

    const firstDayInMonth = getSelectedDate(this.date, 1).getDay();
    
    const previusMonth = getSelectedDate(this.date).getDate();
    
    //Adaptamos el for para poder ver la semana anterior al mes actual
    for (let index = firstDayInMonth; index > 0; index--) {
      this.calendarData.push(templateCalendarData(previusMonth -  (index - 1), this.getSelectedDate(this.date, previusMonth - (index -1), -1))); 
    }
    
    const daysInMonth = getSelectedDate(this.date , 0, 1).getDate();

    for (let index = 1; index <= daysInMonth; index++) {
      const newDate = this.getSelectedDate(this.date, index);
      
      this.calendarData.push(
        {
          ...templateCalendarData(index, newDate),
          isCurrentDay: formatDate(this.date) === formatDate(newDate),
          isCurrentMonth: true,
      }
    );
    }

    const calendarLength = this.calendarData.length;

    for (let index = 1; index <= (this.totalItems - calendarLength); index++) {
      this.calendarData.push(templateCalendarData(index, getSelectedDate(this.date, index, 1)));
    }
  }

  removeEvent(calendarIndex: number, eventIndex: number) {
    const newCalendarData = [...this.calendarData];
    newCalendarData[calendarIndex].events.splice(eventIndex, 1);
    this.calendarData = newCalendarData;
  }

  openModal(){
    this.dialogService.openDialog();
  }

  openModalEdit(event: NCalendar.IEvent) {
    this.dialogService.openDialog(event);
  }

}
