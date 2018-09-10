import { UserInterfacesModule } from './user-interfaces.module';

describe('UserInterfacesModule', () => {
  let userInterfacesModule: UserInterfacesModule;

  beforeEach(() => {
    userInterfacesModule = new UserInterfacesModule();
  });

  it('should create an instance', () => {
    expect(userInterfacesModule).toBeTruthy();
  });
});
