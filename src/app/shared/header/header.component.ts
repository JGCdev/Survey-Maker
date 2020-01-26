import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuOpen: boolean;

  constructor() { }

  ngOnInit() {
  }

  fireMenu() {
    this.menuOpen === true ? this.menuOpen = false : this.menuOpen = true;
  }
}
