import { Component, OnInit } from '@angular/core';
import { AccountService } from '../shared/services/account.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  accountName: any;
  duplicateAccountName: any;
  today: Date = new Date();
  randomText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.';
  // randomText: 'lorem';

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.latestAccountName.subscribe( (name: any) => {
      console.log(name);
      this.accountName = name;
      this.duplicateAccountName = name;
    });
  }

  updateAccountHandler(): void {
    console.log(this.duplicateAccountName);
    // let's work on updating the above in account-data-service
    this.accountService.updateAccountName(this.duplicateAccountName);
  }
}