import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  // Step 1:
  private accountName = 'Vaibhav';

  // Step 2: Create BehaviourSubject with default value
  // for subscribing first
  private myAccount = new BehaviorSubject<any>(this.accountName);

  // Step 3: Create Observable for the BehaviourSubject..
  // so any component can subscribe to it.
  latestAccountName: Observable<any> = this.myAccount.asObservable();
  // latestAccountName is subscribabale
  // refer header.comp.ts for step 4

  constructor() {

  }

  // sending next value over the private variable
  // so components that are subscribing will be getting newName
  updateAccountName(newName): void {
    console.log(newName);
    // updating the name with the newName
    this.myAccount.next(newName);
  }
}

