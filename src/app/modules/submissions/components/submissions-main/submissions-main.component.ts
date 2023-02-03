import { Component, OnInit } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { FormControl, FormGroup } from '@angular/forms';
import { SubmissionsServices } from '../../services/submissions.services';
import { ActivatedRoute, Router } from '@angular/router';
import FileSaver from 'file-saver';
import { ELEMENT_DATA } from '../submissions-table/submissions-table.component';

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
  private dataFromTable = ELEMENT_DATA;
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
  public saveFile = FileSaver.saveAs;

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

  public exportFile(): void {
    const nameFile = `${new Date().getDay()}-${new Date().getMonth()}-${new Date().getFullYear()}`;
    this.saveFile(this.createCsvFile(), `${nameFile}.csv`);
  }

  private createCsvFile(): Blob {
    return new Blob([`${SubmissionsMainComponent.createHeadersForCsv()}\n${this.creteDataForCsv().join('\n')}`], {
      type: 'text/csv;charset=utf-8',
    });
  }

  private static createHeadersForCsv(): string[] {
    return ['Task', 'Status', 'From', 'To', 'Customer Address', 'Due Date', 'Lat', 'Lng'];
  }

  public creteDataForCsv(): string[][] {
    return this.dataFromTable.map((item) => {
      const res: string[] = Object.values(item);
      res.shift();
      return res;
    });
  }

  public redirect(event: MatButtonToggleChange): void {
    this.router.navigate([`submissions/main/${event.value}`]);
  }
}
