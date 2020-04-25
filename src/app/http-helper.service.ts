import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {

  constructor(public http: HttpClient) {
  }


  getWeather() {
    return this.http.get('http://api.openweathermap.org/data/2.5/group?id=5128638&appid=3d0fbf4365efb0de9cbe8fcbb4442519').toPromise();
  }


}
