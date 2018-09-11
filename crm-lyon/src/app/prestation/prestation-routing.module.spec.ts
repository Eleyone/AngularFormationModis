import { PrestationRoutingModule } from './prestation-routing.module';

describe('PrestationRoutingModule', () => {
  let prestationRoutingModule: PrestationRoutingModule;

  beforeEach(() => {
    prestationRoutingModule = new PrestationRoutingModule();
  });

  it('should create an instance', () => {
    expect(prestationRoutingModule).toBeTruthy();
  });
});
