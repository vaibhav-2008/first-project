import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styles: [
  ]
})
export class ContactsComponent implements OnInit, OnDestroy{

  contactList: any[];
  contactSubscription: Subscription;

  constructor(private contactService: ContactService) {
    console.log('Inside Constructor');
   }

  ngOnInit(): void {
    // ideal place for us to send ajax calls
    console.log('Inside ngOnInit');
    // 2.  send the req to the service
    this.contactSubscription = this.contactService.getContacts()
    .subscribe( ( res: any) => { // get the resp from service
      console.log(res);
      this.contactList = res;
    });
  }

  ngOnDestroy(): void{
    console.log('Inside destroy');
    // unsubscribe, remove data, clear array, clearing intervals
    this.contactSubscription .unsubscribe();
    if (this.contactList && this.contactList.length > 0){
      this.contactList.length = 0;
    }
  }

}
