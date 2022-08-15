import { Component, OnInit } from '@angular/core';
import { education } from '../data';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education = education

  constructor() { }

  ngOnInit(): void {
  }

}
