import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: '[contact-row]',
  templateUrl: './contact-row.component.html',
  styleUrls: ['./contact-row.component.css']
})
export class ContactRowComponent {
  @Input() contact: Contact = {} as Contact; // cast leegjs object naar een Contact
  @Output() del = new  EventEmitter<Contact>();

  edit(c: Contact): void {
    c.edit = !c.edit;
  }

  delete(c: Contact): void {
    this.del.emit(c);
  }
}
