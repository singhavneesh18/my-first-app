import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  displayText: boolean = true;
  logDisplayTextChange:number[] = [];
  clickCounter:number = 0;
  temp:number = 0;
  logDisplayTextChangeTimestamp:Date[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  toggleDisplayText() {
    this.displayText = !this.displayText;
    this.clickCounter++;
    this.logDisplayTextChange.push(this.clickCounter);
    this.logDisplayTextChangeTimestamp.push(new Date());
  }

  getBgColor(index: number): string {
    return index > 5 ? 'blue' : 'white';
  }

  getBgColor2(): string {
    return this.clickCounter > 5 ? 'blue' : 'white';
  }
}
