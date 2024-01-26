import { Component } from '@angular/core';
import { Rooms } from './interfaces/Rooms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [NgIf],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {

  appName : string = 'Hotel Rooms'

  rooms : Rooms = {
    totalRooms : 20,
    availableRooms : 10,
    bookedRooms : 5
  }

  toggle : boolean = false

  getRooms  = () : boolean =>{
    
    this.toggle = !this.toggle
    
    console.log(this.toggle)

    return  this.toggle;
  }
}


