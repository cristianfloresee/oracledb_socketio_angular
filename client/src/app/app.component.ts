import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MatList, MatToolbarModule, MatListItem } from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import * as io from 'socket.io-client';

const SERVER_URL = 'http://localhost:3000';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UTA';
  socket; //SOCKET THAT CONNECTS TO OUR SOCKET.IO SERVER

  constructor(){
    this.socket = io(SERVER_URL); //YOUTUBE

  }
}
