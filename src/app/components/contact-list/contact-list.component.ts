import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import {ContactService} from '../../service/contact.service';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts = this.contactService.getContacts();

  constructor(private contactService: ContactService){}

}
