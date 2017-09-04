import { IlemPage } from './app.po';

describe('ilem App', function() {
  let page: IlemPage;

  beforeEach(() => {
    page = new IlemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
