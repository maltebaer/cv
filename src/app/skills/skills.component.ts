import { Component, OnInit } from '@angular/core';
import { me } from '../data';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  me = me

  textColors = [
    'text-yellow-800',
    'text-green-800',
    'text-blue-800',
    'text-purple-800',
    'text-pink-800',
  ];
  backgroundColors = [
    'bg-yellow-100',
    'bg-green-100',
    'bg-blue-100',
    'bg-purple-100',
    'bg-pink-100',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
