import { Injectable } from '@angular/core';
import { Room } from "../models/room";
import { MockRoom } from "../mockdata/mock-room";
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  rooms : Room;
  
  constructor() { 
  }

  getSelectRoom(roomtype : string) : Observable<Room>{
    return of(MockRoom.find(room => room.room_type === roomtype))
  }
}
