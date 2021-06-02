import {Component, OnInit} from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event-service';
import {ActivatedRoute} from '@angular/router';


declare let toastr;
@Component({
    template: `
    <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
    <div *ngFor="let event of events" class="col-md-5">
    <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
    </div>
    </div>
    </div>
    `
})
export class EventsListComponent implements OnInit{
    events: any;
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private eventService: EventService, private toastr: ToastrService,
              private route: ActivatedRoute){
  }
  // tslint:disable-next-line:typedef
  ngOnInit(){
      this.events = this.route.snapshot.data.events;
  }
  // tslint:disable-next-line:typedef
  handleThumbnailClick(eventName){
    this.toastr.success(eventName);
  }
}
