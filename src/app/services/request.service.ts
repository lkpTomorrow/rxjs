import { Injectable } from "@angular/core";
import { resolve } from "path";
import { reject } from "q";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RequestService {
  constructor() {}

  /**
   * // 同步方法：
   */

  getData() {
    return "我是request服务返回的数据";
  }

  /**
   *  回调函数方法：
   * */
  getCallBackData() {
    //1
    console.log(1);

    setTimeout(() => {
      // 2
      let name = "张三"; // 4
      console.log(4);
      return name;
    }, 2000);

    //3  遇到括号结束执行了，所以第四步是取不到值得
    console.log(3);
  }

  getCallBackData2(cb) {

    setTimeout(() => {
      let name = "张三"; 
      cb(name);
    }, 2000);

  }

  /**
   * promise
   */
  // new Promise(),里面是一个function，两个参数：resolve和reject;返回Promise对象；
  // 成功：resolve()，失败：reject()
  // 使用：.then()
  getPromiseData(){
    return new Promise((resolve,reject)=>{
    
      setTimeout(()=>{
        let name= '李四-promise';
        resolve(name);
      },2000)
    })
  }

  // setTimeout改为setInterval，是否会执行多次？
  getPromiseData2(){
    return new Promise((resolve,reject)=>{
      
      setTimeout(()=>{
        let name= '李四-promise-interval';
        resolve(name);
      },2000)


    })
  }

  /**
   * rxjs方法
   */
  // new Observable(),里面是一个函数，参数observer；返回Observer对象；
  // 成功:obeserver.next(); 失败：observer.error();
  // 使用：.subscribe()
  getRxjsData(){
    return new Observable(obeserver=>{
      setTimeout(()=>{
        const name:string='王五-rxjs';
        obeserver.next(name);
      },3000)
    })
  }
  
  // setTimeout 改为 setInterval，是否会执行多次？
  getRxjsData2(){
    return new Observable(obeserver=>{
      setInterval(()=>{
        const name:string='王五-rxjs-interval';
        obeserver.next(name);
      },3000)
    })
  }

    // 操作符的使用：
    getRxjsOperatorData(){
      let count=0;
      return new Observable(obeserver=>{
        setInterval(()=>{
          count++;
          obeserver.next(count);
        },1000)
      })
    }


    /******************* http请求 *********************** */
    
}
