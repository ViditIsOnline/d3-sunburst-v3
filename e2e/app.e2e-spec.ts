import { D3SunburstPage } from './app.po';

describe('d3-sunburst App', () => {
  let page: D3SunburstPage;

  beforeEach(() => {
    page = new D3SunburstPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
