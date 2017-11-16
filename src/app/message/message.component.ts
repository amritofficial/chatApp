import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ChatService } from "../services/chat.service";
import { Observable } from "rxjs/Observable";
import { ChatMessage } from "../models/chat-message.model";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  @Input() chatMessage: ChatMessage;
  userName: string;
  userEmail: string;
  messageContent: string;
  timeStamp: Date = new Date();

  constructor() { }

  ngOnInit(chatMessage = this.chatMessage) {
    this.messageContent = this.chatMessage.message;
    this.timeStamp = this.chatMessage.timeSend;
    this.userEmail = this.chatMessage.email;
    this.userName = this.chatMessage.userName;
  }

}
