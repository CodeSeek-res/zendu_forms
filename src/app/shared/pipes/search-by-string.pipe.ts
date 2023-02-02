import { Pipe, PipeTransform } from '@angular/core';
import { TableElements } from '../../modules/submissions/components/submissions-table/submissions-table.component';
import { DataForm } from '../../modules/submissions/services/submissions.services';

@Pipe({ name: 'searchByName' })
export class SearchByNamePipe implements PipeTransform {
  public transform(data: TableElements[], searchText: DataForm): TableElements[] {
    const searchField = searchText?.searchField ? searchText.searchField : null;
    const selectStatus = searchText?.selectStatus ? searchText.selectStatus : null;
    const date = searchText?.datePicker ? searchText.datePicker : null;

    if (searchField || selectStatus || date) {
      return data.filter(
        (user) =>
          JSON.stringify(user)
            .toLowerCase()
            .includes(searchField ? searchField.toLowerCase().trim() : null) ||
          user.status.toLowerCase().includes(selectStatus ? selectStatus.toLowerCase().trim() : null) ||
          `${new Date(date).getDay()}-${new Date(date).getDate()}-${new Date(date).getFullYear()}` ===
            `${new Date(user.dueDate).getDay()}-${new Date(user.dueDate).getDate()}-${new Date(
              user.dueDate
            ).getFullYear()}`
      );
    } else {
      return data;
    }
  }
}
