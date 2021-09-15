import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponent } from './my/my.components';
import { GroupComponent } from './group/guitar.component';
import{ FormsModule } from '@angular/forms';
import { NewGroupComponent } from './new-guitar/new-guitar.component';
import {RouterModule, Routes} from '@angular/router';
import { GroupListComponent } from './guitar-list/guitar-list.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
	{path: 'guitars', component: GroupListComponent},
	{path: 'students/:grpId', component:StudentListComponent},
	{path: '', redirectTo:'guitars',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent, MyComponent, GroupComponent, NewGroupComponent, 
    GroupListComponent, StudentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
