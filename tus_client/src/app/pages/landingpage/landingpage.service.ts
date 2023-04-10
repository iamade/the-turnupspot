import { Injectable } from '@angular/core';
import { Events } from 'src/app/shared/models/Events';

@Injectable({
  providedIn: 'root'
})
export class LandingpageService {

  constructor() { }

  getEvents(){
    return this.event.slice()
  }



  event: Events[]=[
    {
      id: 1,
      image: "",
      name: "The Future Summit 2022",
      description: "Lagos Oriental Hotel - Lagos Free",
      likes: 2100,
      createdAt: "2021-07-19T13:29:26.000000Z",

  },
  {
    id: 2,
    image: "",
    name: "The Future Summit 2022",
    description: "Lagos Oriental Hotel - Lagos Free",
    likes: 2100,
    createdAt: "2021-07-19T13:29:26.000000Z",

},
{
  id: 3,
  image: "",
  name: "The Future Summit 2022",
  description: "Lagos Oriental Hotel - Lagos Free",
  likes: 2100,
  createdAt: "2021-07-19T13:29:26.000000Z",

},
{
  id: 4,
  image: "",
  name: "The Future Summit 2022",
  description: "Lagos Oriental Hotel - Lagos Free",
  likes: 2100,
  createdAt: "2021-07-19T13:29:26.000000Z",

},


]
}
