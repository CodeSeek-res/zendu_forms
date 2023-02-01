import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { ActivatedRoute, Router } from '@angular/router';

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

  public selectedActiveButtonNavigate: string | undefined = '';

  constructor(private readonly router: Router, private readonly activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    this.selectedActiveButtonNavigate = this.activatedRoute.snapshot.firstChild?.routeConfig?.path;
  }

  public importFile(): void {}

  public redirect(event: MatButtonToggleChange): void {
    this.router.navigate([`submissions/main/${event.value}`]);
  }
}
