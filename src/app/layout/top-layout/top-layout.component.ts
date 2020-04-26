import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-layout',
  templateUrl: './top-layout.component.html',
  styleUrls: ['./top-layout.component.css']
})
export class TopLayoutComponent implements OnInit {
  isToggleOpen = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMasters() {
    this.isToggleOpen = !this.isToggleOpen;
  }

}
