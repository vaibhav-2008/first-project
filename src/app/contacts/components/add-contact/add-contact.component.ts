import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
// import { from } from 'rxjs';
import { Contact} from '../../models/contact';
@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styles: [
  ]
})
export class AddContactComponent implements OnInit {

  // Step 1: Have the form tag equivalent in TS -- FormGroup
  contactForm: FormGroup;
  isSaved: boolean;

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    // Step 1 continues with FormGroup object
    this.contactForm = new FormGroup({
      // Step 2: Have form field equivalent in TS
      name: new FormControl('vaibhav', Validators.required), // Step 5: Work with Validators
      phone: new FormControl('1234567890', [Validators.required, Validators.maxLength(10)]), // Refer TS for step 6 // todo: max length 10
      email: new FormControl('a@b.com', [Validators.required, Validators.email])
    }); // Refer HTML for step 3.
  }

  addContactHandler(): void{
    // you can find the entire formGroup object inside incl dirty, touched, pristine
    console.log(this.contactForm.value);
    // 1. connect to service - refer constructor -- dep injection is connecting the service class
    // 2. send the above data to service
    this.contactService.createContact(this.contactForm.value)
    .subscribe( ( res: Contact) => { // 3. get the resp from services
      // 4. show the updates in html
      console.log(res);
      if (res && res.id){
        this.isSaved = true;
      }
    });
  }
}
