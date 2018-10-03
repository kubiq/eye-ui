import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class WebsocketService {

  // Our socket connection
  private socket;

  constructor() {
  }

  connect() {
    // If you aren't familiar with environment variables then
    // you can hard code `environment.ws_url` as `http://localhost:5000`
    this.socket = io(environment.apiUrl);

    // We define our observable which will observe any incoming messages
    // from our socket.io server.
    const observable = new Observable(observer => {
      this.socket.on('services', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    });

    return observable;
    // // We define our Observer which will listen to messages
    // // from our other components and send messages back to our
    // // socket server whenever the `next()` method is called.
    // const observer = {
    //   next: (data: Object) => {
    //     this.socket.emit('message', JSON.stringify(data));
    //   },
    // };
    //
    // // we return our Rx.Subject which is a combination
    // // of both an observer and observable.
    // return Subject.create(observer, observable);
  }

}
