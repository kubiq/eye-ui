import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  services$: Observable<any>;

  constructor(private service: WebsocketService) {
  }

  ngOnInit() {
    this.services$ = this.service.connect();
  }

}
