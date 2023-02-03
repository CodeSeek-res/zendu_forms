import { MockBuilder, MockRender } from 'ng-mocks';
import { SubmissionsServices } from './submissions.services';
import { SubmissionsModule } from '../submissions.module';

describe('SubmissionsServices', () => {
  beforeEach(() => {
    return MockBuilder([SubmissionsServices], [SubmissionsModule]);
  });

  it('should render', () => {
    expect(() => MockRender(SubmissionsServices)).not.toThrow();
  });
});
