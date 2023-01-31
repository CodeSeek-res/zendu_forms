import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

enum Status {
  LOW = 'low',
  UNCOMPLETE = 'uncomplete',
  UNASSIGNED = 'unassigned',
}

interface TableElements {
  select: string;
  task: string;
  status: string;
  from: string;
  to: string;
  customerAddress: string;
  dueDate: Date;
}

const ELEMENT_DATA: TableElements[] = [
  {
    select: '',
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
  {
    select: '',
    task: 'test name',
    status: 'unassigned',
    from: 'asdasda@gmail.com',
    to: 'asdasdasdad@mail.com',
    customerAddress: 'adasdasdas',
    dueDate: new Date(),
  },
  {
    select: '',
    task: 'test name',
    status: 'uncomplete',
    from: 'asdasda@gmail.com',
    to: 'asdasdasdad@mail.com',
    customerAddress: 'adasdasdas',
    dueDate: new Date(),
  },
  {
    select: '',
    task: 'test name',
    status: '1',
    from: 'asdasda@gmail.com',
    to: 'asdasdasdad@mail.com',
    customerAddress: 'adasdasdas',
    dueDate: new Date(),
  },
  {
    select: '',
    task: 'test name',
    status: '1',
    from: 'asdasda@gmail.com',
    to: 'asdasdasdad@mail.com',
    customerAddress: 'adasdasdas',
    dueDate: new Date(),
  },
  {
    select: '',
    task: 'test name',
    status: '1',
    from: 'asdasda@gmail.com',
    to: 'asdasdasdad@mail.com',
    customerAddress: 'adasdasdas',
    dueDate: new Date(),
  },
  {
    select: '',
    task: 'test name',
    status: '1',
    from: 'asdasda@gmail.com',
    to: 'asdasdasdad@mail.com',
    customerAddress: 'adasdasdas',
    dueDate: new Date(),
  },
  {
    select: '',
    task: 'test name',
    status: '1',
    from: 'asdasda@gmail.com',
    to: 'asdasdasdad@mail.com',
    customerAddress: 'adasdasdas',
    dueDate: new Date(),
  },
  {
    select: '',
    task: 'test name',
    status: '1',
    from: 'asdasda@gmail.com',
    to: 'asdasdasdad@mail.com',
    customerAddress: 'adasdasdas',
    dueDate: new Date(),
  },
];

@Component({
  selector: 'app-submissions-table',
  templateUrl: './submissions-table.component.html',
  styleUrls: ['./submissions-table.component.scss'],
})
export class SubmissionsTableComponent implements OnInit {
  public displayedColumns: string[] = ['select', 'task', 'status', 'from', 'to', 'customerAddress', 'dueDate'];
  public dataSource = new MatTableDataSource<TableElements>(ELEMENT_DATA);
  public selection = new SelectionModel<TableElements>(true, []);

  public allComplete = false;

  public statusEnum = Status;

  constructor() {}

  public ngOnInit(): void {}

  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  public toggleAllRows(): void {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }
}
