import { Component, OnInit } from '@angular/core';

interface Select {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-submissions-main',
  templateUrl: './submissions-main.component.html',
  styleUrls: ['./submissions-main.component.scss'],
})
export class SubmissionsMainComponent implements OnInit {
  public forms: Select[] = [
    { viewValue: 'Low Risk', value: 'low' },
    { viewValue: 'Uncomplete', value: 'uncomplete' },
    { viewValue: 'Unassigned', value: 'unassigned' },
  ];

  public statuses: Select[] = [
    { viewValue: 'Low Risk', value: 'low' },
    { viewValue: 'Uncomplete', value: 'uncomplete' },
    { viewValue: 'Unassigned', value: 'unassigned' },
  ];

  constructor() {}

  ngOnInit(): void {}

  importFile() {}
}
