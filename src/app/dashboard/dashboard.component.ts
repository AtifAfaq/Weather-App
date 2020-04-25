import { Component, OnInit } from '@angular/core';
import { HttpHelperService } from './../http-helper.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  weatherObj: any = {};
  zipCode: any;
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
        alert(e.message)
      })
  }

  convertF(temp) {
    return (temp - 273.15) * 1.88 + 32;
  }



  Submit(zip) {
    if (zip) {
      return this.service.getWeatherbyZip(zip).then((result: any) => {
        this.weatherObj.list.push(result);
        console.log(result);
        this.zipCode = "";


      })
        .catch((e) => {
          alert(e.message)
        })
    }


  }

}
