import { Component, OnInit, OnChanges } from '@angular/core';
import { ChatService } from "../services/chat.service";
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import { Observable } from "rxjs/Observable";
import { ChatMessage } from "../models/chat-message.model";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit, OnChanges {
  feed: FirebaseListObservable<ChatMessage[]>;

  constructor(private chat: ChatService) { }

  ngOnChanges() {
   
  }
  ngOnInit() {
    console.log("feedComponent");
    this.feed = this.chat.getMessages();
  }

}
