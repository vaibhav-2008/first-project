import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    ' .greenText {color:green; }'
  ]
})
export class ConceptsComponent implements OnInit {

  // string interpolation related

  appName = 'Phone Book App!';
  exp = 20;

  // property binding related
  companyName = 'L&T Constructions';
  isLoggedIn = true; // also used in *ngIf

  // two way binding related
  courseName = 'Angular';
  // custom event related
  profileName: any;

  // *ngFor related
  skillsList: string[] = ['html', 'css', 'js'];
  @ViewChild('pRef', { static: false }) pRef: ElementRef;
  @ViewChild(CebComponent, { static: false }) cebData: any;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {
    console.log(this.pRef.nativeElement.innerHTML);
    this.pRef.nativeElement.innerHTML = 'DOM updated successfully';
    console.log(this.cebData);
  }
  getExp(): number {
    return this.exp;
  }

  // property binding related
  isAuth(): boolean {
    return !this.isLoggedIn;
  }

  // event binding related
  clickHandler(evt): void {
    console.log(evt);
    alert('clicked');
  }

  profileLoadedHandler(evt): void {
    console.log(evt);
    this.profileName = evt;
  }
}
