import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserDetails } from './user-detail.model';

@Component({
  selector: 'app-view-child-ex',
  templateUrl: './view-child-ex.component.html',
  styleUrls: ['./view-child-ex.component.css']
})
export class ViewChildExComponent implements OnInit {

  userDetails: UserDetails[] = [];

  @ViewChild('username', {static: true}) username: ElementRef = new ElementRef('');
  @ViewChild('pwd') password: any;

  constructor() { }

  ngOnInit(): void {
  }

  saveDetails() {
    
    console.log('username: ', this.username.nativeElement.value, ',  password: ', this.password.nativeElement.value);
    
  }

}
