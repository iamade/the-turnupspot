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
      dateOfEvent: "2021-07-19T13:29:26.000000Z",
      description: "Lagos Oriental Hotel - Lagos Free",
      likes: 2100,
      createdAt: "2021-07-19T13:29:26.000000Z",

  },
  {
    id: 2,
    image: "/assets/images/blockchainimg.png",
    name: "Lagos Blockchain 2022",
    dateOfEvent: "2021-09-1T13:29:26.000000Z",
    description: "Freedon Park Lagos - Lagos",
    likes: 2100,
    createdAt: "2021-07-19T13:29:26.000000Z",

},
{
  id: 3,
  image: "",
  name: "African Real Estate summit Awards & Expo",
  dateOfEvent: "2021-09-20T13:29:26.000000Z",
  description: "Lagos Oriental Hotel - Lagos Free",
  likes: 2100,
  createdAt: "2021-07-19T13:29:26.000000Z",

},
{
  id: 4,
  image: "",
  name: "Study Abroad Education Expo Lagos Island 2022",
  dateOfEvent: "2021-07-19T13:29:26.000000Z",
  description: "Lagos Oriental Hotel - Lagos Free",
  likes: 2100,
  createdAt: "2021-07-19T13:29:26.000000Z",

},
{
  id: 5,
  image: "",
  name: "Founders' Camp Fire",
  dateOfEvent: "2021-07-19T13:29:26.000000Z",
  description: "Lagos Oriental Hotel - Lagos Free",
  likes: 2100,
  createdAt: "2021-07-19T13:29:26.000000Z",

},
{
  id: 6,
  image: "",
  name: "The Big 5 Construct 2022",
  dateOfEvent: "2021-07-19T13:29:26.000000Z",
  description: "Lagos Oriental Hotel - Lagos Free",
  likes: 2100,
  createdAt: "2021-07-19T13:29:26.000000Z",

},
{
  id: 7,
  image: "",
  name: "Afro Culture Con",
  dateOfEvent: "2021-07-19T13:29:26.000000Z",
  description: "Lagos Oriental Hotel - Lagos Free",
  likes: 2100,
  createdAt: "2021-07-19T13:29:26.000000Z",

},
{
  id: 8,
  image: "",
  name: "Singles and Married Hnagout Lagos 2022",
  dateOfEvent: "2021-07-19T13:29:26.000000Z",
  description: "Lagos Oriental Hotel - Lagos Free",
  likes: 2100,
  createdAt: "2021-07-19T13:29:26.000000Z",

},
{
  id: 9,
  image: "",
  name: "Cyberchain Lagos 2022",
  dateOfEvent: "2021-07-19T13:29:26.000000Z",
  description: "Lagos Oriental Hotel - Lagos Free",
  likes: 2100,
  createdAt: "2021-07-19T13:29:26.000000Z",

},
{
  id: 10,
  image: "",
  name: "Lagos Blockchain 2022",
  dateOfEvent: "2021-07-19T13:29:26.000000Z",
  description: "Lagos Oriental Hotel - Lagos Free",
  likes: 2100,
  createdAt: "2021-07-19T13:29:26.000000Z",

},
{
  id: 11,
  image: "",
  name: "Africa's Future Empowerment Conference (AFEC)",
  dateOfEvent: "2021-07-19T13:29:26.000000Z",
  description: "Lagos Oriental Hotel - Lagos Free",
  likes: 2100,
  createdAt: "2021-07-19T13:29:26.000000Z",

},
{
  id: 12,
  image: "",
  name: "Study Abroad Education Expo Lagos Islane 2022",
  dateOfEvent: "2021-07-19T13:29:26.000000Z",
  description: "Lagos Oriental Hotel - Lagos Free",
  likes: 2100,
  createdAt: "2021-07-19T13:29:26.000000Z",

},


]
}
