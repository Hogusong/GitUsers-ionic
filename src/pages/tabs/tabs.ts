import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { SearchPage } from '../search/search';
import { FeedPage } from '../feed/feed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FeedPage;
  tab2Root = SearchPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
