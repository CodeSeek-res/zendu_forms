import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { FormControl, FormGroup } from '@angular/forms';
import { SubmissionsServices } from '../../services/submissions.services';
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
  public filterForms = new FormGroup({
    searchField: new FormControl<string>(''),
    selectStatus: new FormControl<string>(''),
    datePicker: new FormControl<Date>(undefined),
  });

  public forms: Select[] = [];
  public statuses: Select[] = [
    { viewValue: 'Low Risk', value: 'low' },
    { viewValue: 'Uncomplete', value: 'uncomplete' },
    { viewValue: 'Unassigned', value: 'unassigned' },
  ];

  public selectedActiveButtonNavigate: string | undefined = '';

  constructor(
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute,
    private readonly submissionsServices: SubmissionsServices
  ) {}

  public ngOnInit(): void {
    this.selectedActiveButtonNavigate = this.activatedRoute.snapshot.firstChild?.routeConfig?.path;

    this.filterForms.valueChanges.subscribe({
      next: (value) => {
        this.submissionsServices.dataFromForm.next({
          searchField: value.searchField,
          selectStatus: value.selectStatus,
          datePicker: value.datePicker,
        });
      },
    });
  }

  public exportFile(file): void {
    // TODO: Send file on back-end
    console.log(file.target.files[0]);
  }

  public redirect(event: MatButtonToggleChange): void {
    this.router.navigate([`submissions/main/${event.value}`]);
  }
}
