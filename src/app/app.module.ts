import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { Route, RouterModule } from '@angular/router';
import { FormDemoComponent } from './components/form-demo/form-demo.component';
import { HomeComponent } from './pages/home/home';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';

let routes: Route[]=[
  {path:'datepicker', component: DatePickerComponent},
  {path:'formdemo', component: FormDemoComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  declarations: [ //componenten van mijzelf
    AppComponent,
    DatePickerComponent,
    FormDemoComponent,
    HomeComponent,
    ContactFormComponent,
    ContactListComponent
  ],
  imports: [      //componenten van een ander die ik nodig heb
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
