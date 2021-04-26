import { style } from '@angular/animations';
import {Component, Input} from '@angular/core';


@Component({
    selector: 'event-thumbnail',
    template:`
    
    <div class="well hoverwell thumbnail">
        <h2>Name: {{event?.name}}
        </h2>

        <div>Date: {{event?.date}}</div>
        <div>Time: {{event?.time}}</div>
        <div [ngSwitch]="event?.time">
        <span *ngSwitchCase="'8:00 am'">Early Start</span>
        <span *ngSwitchCase="'10:00 am'">Late Start</span>
        <span *ngSwitchDefault>Normal Start</span>
        </div>

        <div>Price: #{{event?.price}}</div>
    
        <div [hidden]="!event?.location">
            <span>Location: {{event?.location?.address}}</span>
    
            <span class="pad-left"> {{event?.location?.city}}, {{event.location?.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
        OnlineURL: {{event?.onlineUrl}}
        </div>
    
    </div>

    `,
    styles:[`
        .thumbnail {min-height: 210px;}
        .pad-left{margin-left:10px;}
        .welldiv{color:#bbb;}
    `]
    
})
export class EventThumbnailComponent{
    @Input() event:any

  
}