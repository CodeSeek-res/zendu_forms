import { Component } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';

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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
    task: 'Work Flow: Requires Location',
    status: 'low',
    from: 'zendu@zendu.com',
    to: 'tracy@zenduit.com',
    customerAddress: '2118 Thornridge Cir. Syracuse, Connecticut 35624',
    dueDate: new Date(),
  },
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
];

@Component({
  selector: 'app-submissions-table',
  templateUrl: './submissions-table.component.html',
  styleUrls: ['./submissions-table.component.scss'],
})
export class SubmissionsTableComponent {
  public displayedColumns: string[] = ['select', 'task', 'status', 'from', 'to', 'customerAddress', 'dueDate'];
  public dataSource = ELEMENT_DATA;
  public selection = new SelectionModel<TableElements>(true, []);

  public statusEnum = Status;
  public pageSize = 9;
  public pageIndex = 1;

  public paginate(event: number): void {
    if (event !== 0 && event !== Math.ceil(this.dataSource.length / this.pageSize + 1)) {
      this.pageIndex = event;
    }
  }

  public isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  public toggleAllRows(): void {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource);
  }

  public capacityFromTable(): string {
    return `${this.pageSize * this.pageIndex - this.pageSize + 1}-${this.pageSize * this.pageIndex} of ${
      this.dataSource.length
    } submissions`;
  }
}
