import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-foot',
  templateUrl: './foot.component.html',
  styleUrls: ['./foot.component.css']
})
export class FootComponent implements OnInit {

  ilem_email_adress = "ilemyiwen@gmail.com";
  foot_text = "Carte visite Ilem Yiwen, faite par ";

  constructor() { }

  ngOnInit() {
  }

}
