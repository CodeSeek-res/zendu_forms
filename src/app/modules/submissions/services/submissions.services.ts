import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface SearchData {
  searchField: string | undefined;
  selectStatus: string | undefined;
  datePicker: Date | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class SubmissionsServices {
  public dataFromForm = new BehaviorSubject<SearchData>(null);
}
