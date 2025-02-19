import { Injectable, signal } from '@angular/core';
import { NCalendar } from '../model/calendar.model';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  private dialogData =  signal<NCalendar.IEvent | null>(null);

  constructor() { }
}
