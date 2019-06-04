import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Room } from 'src/app/models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  
  private url: string = "http://localhost:8081/room/";

  constructor(private http: HttpClient) { }

  createUser(room: Room) {
    return this.http.post(this.url, room).pipe(map(
      (response) => {
        console.log(response);
        return response;
      },
      (error) => {
        console.log('oops', error)
      })
    );
  }

  getAllRoom(){
    return this.http.get(this.url).pipe();
  }

  getImgName(id , type){
    return this.http.get(this.url+"img/filename/"+id+"/"+type).pipe();
  }
}
