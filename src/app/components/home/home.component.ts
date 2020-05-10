import { Component, OnInit } from "@angular/core";
import { RequestService } from "src/app/services/request.service";

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
    const callbackData2 = this.$service.getCallBackData2(this.cbFn);
  
  }
  
  cbFn(params) {
    console.log(params);
  }
}
