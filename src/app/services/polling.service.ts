import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private connection: any = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:44326/chatsocket") // mapping to the chathub as in startup.cs
    .configureLogging(signalR.LogLevel.Information)
    .build();

  constructor() {
    this.connection.onclose(async () => {
      await this.start();
    });
    this.start();
  }

  // Start the connection
  public async start() {
    try {
      await this.connection.start();
      console.log("connected");
    } catch (err) {
      console.log(err);
      setTimeout(() => this.start(), 5000);
    }
  }
}
