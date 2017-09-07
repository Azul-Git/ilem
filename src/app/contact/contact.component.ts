import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
   contact_text ="Here you will find Ilem Yiwen contact informations";

  constructor() { }

  ngOnInit() {
  }

}
