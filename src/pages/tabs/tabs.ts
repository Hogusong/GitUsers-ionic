import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { UserPage } from '../user/user';
import { FeedPage } from '../feed/feed';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FeedPage;
  tab2Root = UserPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
