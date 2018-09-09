import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FeedService } from '../../app/services/feed.service';
import { DetailsPage } from '../details/details';


@Component({
  selector: 'search',
  templateUrl: 'search.html'
})
export class SearchPage {
  user: any;
  username: string;

  constructor(public navCtrl: NavController, private feedService: FeedService) {
    this.username = '';

  }

  getUser(username) {
    this.feedService.getPost(username).subscribe(response => {
      this.user = response;
      this.viewUser(this.user)
    });
  }

  viewUser(user){
    this.navCtrl.push(DetailsPage, {
      user: user
    })
  }

  clearUser(){
    this.username = '';
  }

  onInput(e){
    this.username = e.value
  }
}
