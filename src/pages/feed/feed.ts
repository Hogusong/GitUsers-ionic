import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedService } from '../../app/services/feed.service';
import { DetailsPage } from '../details/details';


@Component({
  selector: 'feed',
  templateUrl: 'feed.html'
})
export class FeedPage {
  users: any;
  startFrom: number;

  constructor(public navCtrl: NavController, private feedService: FeedService) {
    this.users = [];
    this.startFrom = 0;
  }

  ngOnInit() {
    this.getUsers(this.startFrom);
  }

  getUsers(startFrom) {
    this.feedService.getPosts(startFrom).subscribe(response => {
      const tempUsers = response;
      console.log(response)
      tempUsers.forEach(user => this.getUse(user.login));
    })
    console.log(this.users)
  }

  getUse(username) {
    this.feedService.getPost(username).subscribe(response => {
      this.users.push(response);
    });
  }

  viewUser(user){
    this.navCtrl.push(DetailsPage, {
      user: user
    })
  }
}
