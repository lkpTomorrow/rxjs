import { Observable } from 'rxjs';


import { Injectable } from "@angular/core";

// const axios = require('axios');
import axios from 'axios'
import { reject } from 'q';

@Injectable({
  providedIn: "root"
})
export class CustomHttpService {
  constructor() {}

  axiosGet(api) {

    return new Promise((resolve,reject)=>{
       axios
      .get(api)
      .then(function(response) {
        // handle success
        console.log('service-response:',response);
        resolve(response);

      })
      .catch(function(error) {
        // handle error
        console.log('service-error:',error);
        reject(error);
      })
    })
   
  }

  axiosGet2(api){
    return new Observable((observer)=>{
      axios
      .get(api)
      .then(res=>{
        observer.next(res);
      })
      .catch(err=>{
        reject(err);
      })
    })
  }
}
