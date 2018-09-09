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

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');
    this.startFrom = this.users[this.users.length-1].id
    setTimeout(() => {
      this.getUsers(this.startFrom);
      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  getUsers(startFrom) {
    this.feedService.getPosts(startFrom).subscribe(response => {
      const tempUsers = response;
      console.log(response)
      tempUsers.forEach(user => this.getUser(user.login));
    })
    console.log(this.users)
  }

  getUser(username) {
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
