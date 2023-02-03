import { SubmissionsMainComponent } from './submissions-main.component';
import { MockBuilder, MockInstance, MockRender } from 'ng-mocks';
import { SubmissionsModule } from '../../submissions.module';

describe('SubmissionsMainComponent', () => {
  beforeEach(MockInstance.remember);
  afterEach(MockInstance.restore);

  beforeEach(async () => {
    beforeEach(() => {
      return MockBuilder(SubmissionsMainComponent, SubmissionsModule);
    });
  });

  it('should render', () => {
    expect(() => MockRender(SubmissionsMainComponent)).not.toThrow();
  });
});
