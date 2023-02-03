import { AppComponent } from './app.component';
import { MockBuilder, MockRender } from 'ng-mocks';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  beforeEach(() => {
    return MockBuilder(AppComponent, AppModule);
  });

  it('should render', () => {
    expect(() => MockRender(AppComponent)).not.toThrow();
  });
});
