import { Component, OnInit } from '@angular/core';
import { experience } from '../data'

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  experience = experience

  constructor() { }

  ngOnInit(): void {
  }

}
