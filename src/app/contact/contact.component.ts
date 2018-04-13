import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	contact: Contact= new Contact();
	message: string;

  constructor(private contactService: ContactService) {
  	this.contact.usePerso = false;
  }

  ngOnInit() {
  }

  saveContact():void {
  	//si null n'est pas enregistré
  	this.contact.id = 0;
  	this.contact.usePerso = !!this.contact.usePerso;
	this
		.contactService
		.postContact(this.contact)
		.subscribe( data => {
			this.contact = data;
			this.message = `Demande enregistrée sous le numéro "${this.contact.id}" !`;
			console.log( this.contact);
		});
  }

}
