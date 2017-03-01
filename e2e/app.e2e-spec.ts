import { UniversityAppPage } from './app.po';

describe('university-app App', function() {
  let page: UniversityAppPage;

  beforeEach(() => {
    page = new UniversityAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
