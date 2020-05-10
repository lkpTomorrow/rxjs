import { Component, OnInit } from "@angular/core";
import { RequestService } from "src/app/services/request.service";

import { filter, map } from "rxjs/operators";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(public $service: RequestService) {}

  ngOnInit() {
    // 同步方法
    /* const data = this.$service.getData();
    console.log("home组件打印数据：", data); */

    // 回调函数方法 - error：
    /* const callbackData = this.$service.getCallBackData();
    // 定时器内部的代码会执行，但是，已经返回值了，是undefined
    console.log("callback-data:", callbackData); // callback-data: undefined */

    // 回调函数方法 - ok
    /* const callbackData2 = this.$service.getCallBackData2(this.cbFn); */

    /**
     * promise处理异步
     */
    this.$service.getPromiseData().then(res => {
      console.log("promise-data:", res);
    });

    // 是否多次执行？ => 只执行了一次
    this.$service.getPromiseData2().then(res => {
      console.log("promise-data-interval:", res);
    });

    /**
     * rxjs方法
     */
    const subscriber = this.$service.getRxjsData().subscribe(res => {
      console.log("rxjs-data:", res);
    });

    // 是否多次执行？ => 可以执行多次
    const subscriber2 = this.$service.getRxjsData2().subscribe(res => {
      console.log("rxjs-data-interval:", res);
    });

    // Observe 取消订阅
    setTimeout(() => {
      // subscriber.unsubscribe(); // 撤销
    }, 1000);

    this.$service
      .getRxjsOperatorData()
      .pipe(
        filter((val:any, ind) => {
          if (val % 2 === 0) {
            return true;
          }
        }),
        map((val, ind) => val * val)
      )
      .subscribe(res => {
        console.log("operator-data:", res);
      });
  }

  cbFn(params) {
    console.log(params);
  }
}
