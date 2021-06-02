import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ProfileComponent} from './profile.components';
import {NgModule} from '@angular/core';
import {userRoutes} from './userRoutes';

// @ts-ignore
// @ts-ignore
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes)
  ],

  declarations: [
    ProfileComponent,
  ],
  providers: []
})

export class UserModule {

}
