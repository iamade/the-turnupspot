import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/shared/models/Events';
import { LandingpageService } from './landingpage.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  events: Events[] = []
  constructor(private eventsService: LandingpageService) { }

  ngOnInit(): void {
    this.loadEvents()
  }

  loadEvents(){
    this.events = this.eventsService.getEvents()
    console.log('events', this.events);
    
  }

}
