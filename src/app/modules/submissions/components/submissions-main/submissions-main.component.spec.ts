import { SubmissionsMainComponent } from './submissions-main.component';
import { MockBuilder, MockInstance, MockRender } from 'ng-mocks';
import { SubmissionsModule } from '../../submissions.module';
import { ActivatedRoute } from '@angular/router';

describe('SubmissionsMainComponent', () => {
  beforeEach(() => {
    return MockBuilder([SubmissionsMainComponent], [SubmissionsModule]).provide({
      provide: ActivatedRoute,
      useValue: {
        snapshot: { firstChild: { routeConfig: { path: 'map' } } },
      },
    });
  });
  MockInstance(ActivatedRoute, 'snapshot', jest.fn(), 'get');

  it('should render', () => {
    expect(() => MockRender(SubmissionsMainComponent)).not.toThrow();
  });
});
