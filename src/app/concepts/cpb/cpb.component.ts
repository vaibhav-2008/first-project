import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1: creating a custom property
  @Input() age = 25; // @Input is a decorator and it makes age as custom property
  constructor() { }

  ngOnInit(): void {
  }

}
