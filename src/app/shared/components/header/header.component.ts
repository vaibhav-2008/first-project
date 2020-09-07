import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', // html
  styleUrls: ['./header.component.css'] // css
})
export class HeaderComponent implements OnInit {

  // ts
  accountName: string;
  // you can subscribe from account data service
  // Step 4 of any to any comp commn -- prev step is in account data service
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    // step 4 continues -- subscribe to the observable
    this.accountService.latestAccountName.subscribe((name: any) => {
      console.log(name);
      this.accountName = name; // Step 5 -- refer html for string interpolation
    });
  }

}


