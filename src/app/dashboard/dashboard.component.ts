import { Component, OnInit } from '@angular/core';
import { HttpHelperService } from './../http-helper.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  weatherObj: any = {};
  constructor(public service: HttpHelperService) {
    this.getApp();
    // console.log(this.weatherObj)

  }


  ngOnInit(): void {
  }

  getApp() {
    return this.service.getWeather().then((result: any) => {
      this.weatherObj = result;
      console.log(result);
    })
      .catch((e) => {
        console.log(e)
      })
  }

  convertF(temp) {
    return (temp - 273.15) * 1.88 + 32;
  }

}
