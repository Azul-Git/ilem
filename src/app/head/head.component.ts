import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  //logo image link
  myLogo: string ='/ilem/assets/logo_IlemYiwen1_white.png';

  constructor() { }

  ngOnInit() {
  }
}
