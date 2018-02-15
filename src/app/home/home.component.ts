import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myLogo: string ='/assets/logo_IlemYiwen1_white.png';
  home_text= "Développement, formation, installation et maintenance informatique"

  ilem_email_adress = "ilemyiwen@gmail.com";

  constructor() { }

  ngOnInit() {
  }
}
