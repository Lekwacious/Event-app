import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  template: `
  <h1>New Event</h1>
    <hr>
    <div class="col-md-6">
      <h3>[create event form will be here ]</h3>
        <br/>
      <br/>
      <button type="submit" class="btn btn-primary">
    Save
      </button>
      <button  type="submit" class="btn btn-default" (click)="cancel()">
        Cancel
      </button>
    </div>
  `

})
export class CreateEventComponent {
  isDirty = true;
  constructor(private router: Router) {
  }
  // tslint:disable-next-line:typedef
  cancel() {
    this.router.navigate(['/events']);
  }
}
