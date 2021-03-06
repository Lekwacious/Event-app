import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {EventService} from '../shared/event-service';


@Injectable()
export class EventRouteActivator implements CanActivate{
  constructor( private eventService: EventService, private route: Router) {
  }
  // tslint:disable-next-line:typedef
  canActivate(route: ActivatedRouteSnapshot){
   const eventExists = !!this.eventService.getEvent(+route.params.id);

   if (!eventExists){
     this.route.navigate(['/404']);
   }
   return eventExists;
  }

}
