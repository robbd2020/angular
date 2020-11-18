import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[];
  constructor() { }

  ngOnInit(): void {
  }


  edit(c: Contact): void  {
    c.edit = !c.edit;
  }

  delete(c: Contact): void{
    const i = this.contacts.indexOf(c);
    this.contacts.splice(i,1);
  }

}
