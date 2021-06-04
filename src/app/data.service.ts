import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData(data:any){
    if(data!==null){
      let year = data.year || '';
      let land = data.land || '';
      let launch = data.launch || '';
        return this.http.get(`https://api.spacexdata.com/v3/launches?limit=100&launch_year=${year}&land_success=${land}&launch_success=${launch}`)

    } else {
      return this.http.get('https://api.spacexdata.com/v3/launches?limit=100')
    }

  }
}
