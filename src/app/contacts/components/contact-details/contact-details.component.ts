import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styles: [
  ]
})
export class ContactDetailsComponent implements OnInit {

  contactData: any;
  duplicateContactData: any;
  isUpdated: boolean;

  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // read url param
    const contactID = this.route.snapshot.paramMap.get('id');
    console.log('inside ngOnInit');
    // send ajax calls
    this.contactService.getContactById(contactID)
      .subscribe((res: any) => {
        console.log(res);
        this.contactData = res;
      });
  }

  editModalHandler(): void {
    this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
  }

  updateContactHandler(): void {
    console.log(this.duplicateContactData);

    this.contactService.updateContact(this.duplicateContactData)
      .subscribe((res: any) => {
        console.log(res);
        if (res) {
          this.isUpdated = true;
        }
      });

  }
}
