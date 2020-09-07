import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 1: create custom event -- create an obj for EventEmitter class
   // tslint:disable-next-line: align
   @Output() profileLoaded: EventEmitter<any> = new EventEmitter<any>();
  // Step 2 : @Output will make profileLoaded as custom event
  

  constructor() {
    console.log('Inside Constructor');
   }

  ngOnInit(): void { // lifecycle hook
    console.log('inside ngOnInit');
    // ideal place for ajax calls/emitting events
    
    // this.profileLoaded.emit('Vaibhav'); // Step 4: sending  "Vaibhav" to parent comp
  }

  sendDataHandler(): void{
    // Step 3: Emit the custom event.
    this.profileLoaded.emit('Vaibhav'); // Step 4: sending  "Vaibhav" to parent comp
  }

}
