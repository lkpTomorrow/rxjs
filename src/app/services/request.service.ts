import { Injectable } from "@angular/core";

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
    }, 1000);

    //3  遇到括号结束执行了，所以第四步是取不到值得
    console.log(3);
  }

  getCallBackData2(cb) {

    setTimeout(() => {
      let name = "张三"; 
      cb(name);
    }, 1000);

  }
}
