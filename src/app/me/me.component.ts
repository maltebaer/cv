import { Component, OnInit } from '@angular/core';

import { me } from '../data';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
  me = me;

  constructor() { }

  ngOnInit(): void {
  }

}
