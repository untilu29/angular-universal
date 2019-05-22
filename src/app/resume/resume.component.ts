import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  age: number;

  constructor() {
    this.age = new Date().getFullYear() - 1994;
  }

  ngOnInit() {
  }

}
