import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { BadgesAppAppComponent } from '../app/badges-app.component';

beforeEachProviders(() => [BadgesAppAppComponent]);

describe('App: BadgesApp', () => {
  it('should create the app',
      inject([BadgesAppAppComponent], (app: BadgesAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'badges-app works!\'',
      inject([BadgesAppAppComponent], (app: BadgesAppAppComponent) => {
    expect(app.title).toEqual('badges-app works!');
  }));
});
