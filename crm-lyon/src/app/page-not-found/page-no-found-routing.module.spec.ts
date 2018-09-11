import { PageNoFoundRoutingModule } from './page-no-found-routing.module';

describe('PageNoFoundRoutingModule', () => {
  let pageNoFoundRoutingModule: PageNoFoundRoutingModule;

  beforeEach(() => {
    pageNoFoundRoutingModule = new PageNoFoundRoutingModule();
  });

  it('should create an instance', () => {
    expect(pageNoFoundRoutingModule).toBeTruthy();
  });
});
