import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
  cityIDs = '5128638,1689973,4887398';
  appKey = '3d0fbf4365efb0de9cbe8fcbb4442519';
  apiPath = 'http://api.openweathermap.org/data/2.5/group?';
  apiZip = 'http://api.openweathermap.org/data/2.5/weather?';

  constructor(public http: HttpClient) {
  }


  getWeather() {
    var url = `${this.apiPath}id=${this.cityIDs}&appid=${this.appKey}`
    return this.http.get(url).toPromise();
  }

  getWeatherbyZip(zip) {
    var urlbyZip = `${this.apiZip}zip=${zip}&appid=${this.appKey}`
    return this.http.get(urlbyZip).toPromise();
  }

}
