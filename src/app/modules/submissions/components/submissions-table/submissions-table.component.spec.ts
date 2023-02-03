import { MockBuilder, MockInstance, MockRender } from 'ng-mocks';
import { SubmissionsModule } from '../../submissions.module';
import { SearchData, SubmissionsServices } from '../../services/submissions.services';
import { BehaviorSubject } from 'rxjs';
import { SubmissionsTableComponent } from './submissions-table.component';
import { SearchByNamePipe } from '../../../../shared/pipes/search-by-string.pipe';

describe('SubmissionsTableComponent', () => {
  beforeEach(() => {
    return MockBuilder([SubmissionsTableComponent], [SubmissionsModule]).mock(
      SearchByNamePipe,
      (value) => `mock:${value}`
    );
  });
  MockInstance(SubmissionsServices, 'dataFromForm', new BehaviorSubject<SearchData>(null));

  it('should render', () => {
    expect(() => MockRender(SubmissionsTableComponent)).not.toThrow();
  });
});
