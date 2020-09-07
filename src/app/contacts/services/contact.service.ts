import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  createContact(contactData: any): Observable<Contact> { //  1. get the data from comp
    console.log(contactData);
    //  2. send the data to rest API
    // 2.1 What is the REST APIurl // http://jsonplaceholder.typicode.com
    // 2.2  HTTP method
    return this.http.post(this.REST_API_URL, contactData)
      .pipe(map((res: Contact) => { // 3.  get the resp from REST API
        console.log(res);
        return res; // 4.  send the resp to the comp
      }));
  }

  // read all comtact
  getContacts(): any {
    console.log('Inside getContacts');
    return this.http.get(this.REST_API_URL)
      .pipe(map((res: Contact[]) => { // 3. get the resp from REST API
        console.log(res);
        return res;  // 4. send the resp to the comp.
      }));

  }

  // read contact details
  getContactById(id: string): any {
    console.log(id);
    const CONTACT_DETAILS_URL = `${this.REST_API_URL}/${id}`;
    return this.http.get(CONTACT_DETAILS_URL)
    .pipe(map((res: any) => { // 3. get the resp from REST API
      console.log(res);
      return res;  // 4. send the resp to the comp.
    }));
  }

  // update
  updateContact(updateableContactData): any{
    console.log(updateableContactData);
    const CONTACT_DETAILS_URL = `${this.REST_API_URL}/${updateableContactData.id}`;
    return this.http.put(CONTACT_DETAILS_URL,updateableContactData)
    .pipe(map((res: any) => {
      console.log(res);
      return res;
    }));
  }
  
}
