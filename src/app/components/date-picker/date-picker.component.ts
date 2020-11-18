import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent  {
  
  editLabel = 'Edit';


  contactsList: Contact[] = [
    { firstName: 'Sam', surname: 'Smith', email: 'sam.smith@music.com' },
    { firstName: 'Frank', surname: 'Muscles', email: 'frank@muscles.com' },
    { firstName: 'Eddy', surname: 'Valentino', email: 'eddy@valfam.co.uk' }
  ];


  addContact(c: Contact): void{
    this.contactsList.push(c);
  }


}
