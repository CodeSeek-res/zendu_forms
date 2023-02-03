import { Pipe, PipeTransform } from '@angular/core';
import { TableElements } from '../../modules/submissions/components/submissions-table/submissions-table.component';
import { SearchData } from '../../modules/submissions/services/submissions.services';

@Pipe({ name: 'searchByName' })
export class SearchByNamePipe implements PipeTransform {
  public transform(data: TableElements[], searchData: SearchData): TableElements[] {
    const searchField = searchData?.searchField;
    const selectStatus = searchData?.selectStatus;
    const date = searchData?.datePicker;

    if (searchField || selectStatus || date) {
      return data.filter(
        (user) =>
          JSON.stringify(user).toLowerCase().includes(searchField.toLowerCase().trim()) &&
          user.status.toLowerCase().includes(selectStatus.toLowerCase().trim()) &&
          (date
            ? `${new Date(date).getDate()}-${new Date(date).getMonth()}-${new Date(date).getFullYear()}` ===
              `${new Date(user.dueDate).getDate()}-${new Date(user.dueDate).getMonth()}-${new Date(
                user.dueDate
              ).getFullYear()}`
            : true)
      );
    } else {
      return data;
    }
  }
}
