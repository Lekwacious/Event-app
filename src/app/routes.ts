import {Routes} from '@angular/router';
import { EventDetailsComponent } from './events/event-details/event-details-component';
import { EventsListComponent } from './events/events-list-components';
import {CreateEventComponent} from './events/createEventComponent';
import {Error404Component} from './error/404.component';
import {EventRouteActivator} from './events/event-details/EventRouteActivatorService';
import {EventListResolver} from './events/eventListResolverService';

export const appRoutes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
    {
        path: 'events',
        component: EventsListComponent,
        resolve: {events: EventListResolver}
    },
    {
        path: 'events/:id',
        component: EventDetailsComponent,
      canActivate: [EventRouteActivator],
    },
  {
    path: '404',
    component: Error404Component
  },
    {
        path: '',
        redirectTo: '/events',
        pathMatch: 'full'
    },
  {
  path: 'user',
  loadChildren: () => import('./user/user.module')
  .then(m => m.UserModule)
},
];
