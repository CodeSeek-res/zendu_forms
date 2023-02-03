import { MockBuilder, MockInstance, MockRender } from 'ng-mocks';
import { SubmissionsModule } from '../../submissions.module';
import { SubmissionsMapComponent } from './submissions-map.component';
import { SearchData, SubmissionsServices } from '../../services/submissions.services';
import { BehaviorSubject } from 'rxjs';

describe('SubmissionsMapComponent', () => {
  beforeEach(() => {
    return MockBuilder([SubmissionsMapComponent], [SubmissionsModule]);
  });
  MockInstance(SubmissionsServices, 'dataFromForm', new BehaviorSubject<SearchData>(null));

  it('should render', () => {
    expect(() => MockRender(SubmissionsMapComponent)).not.toThrow();
  });
});
