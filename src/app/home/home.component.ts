import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ilem_email_adress = "ilemyiwen@gmail.com";

  constructor() { }

  ngOnInit() {
  }
}
