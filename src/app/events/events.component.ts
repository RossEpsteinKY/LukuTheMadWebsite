import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as events from 'events';
import {formatDate} from '@angular/common';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],

})
export class EventsComponent implements OnInit {

  events: Event[];
  constructor(
    private httpClient: HttpClient,
  ) { }

  async ngOnInit() {
    await this.getEvents();

    console.log(this.events);
  }

  async getEvents() {

    let currentDate = new Date().toISOString();
    console.log(currentDate);

    this.httpClient.get<any>('https://www.googleapis.com/calendar/v3/calendars/vcjolj9j5oq560bp0mtgqi0jio%40group.calendar.google.com/events?' +
      'orderBy=startTime&singleEvents=true&timeMin='
      +  currentDate +
      '&showDeleted=false&key=' + environment.apiKey).subscribe(response => {
      console.log(response.items);
      this.events = response.items;
    });
  }

}
