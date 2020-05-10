import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(
    public $service: RequestService,
    public http:HttpClient
  ) { }

  ngOnInit() {
  }


  public list:any[]=[]; // 渲染接口的列表

  // 调用接口获取数据
  getData(){
    console.log('getData执行了');

    const api="http://a.itying.com/api/productlist";

    let stream=  this.http.get(api); 
    console.log('接口的对象：',stream); // Obeserver
   
    stream.subscribe(
      (res:any)=>{
        console.log('get请求的返回：',res);
        this.list= res.result||[];
      }
    )

  }


  /**
   * post提交数据
   */
  login(){

    const httpOptions= {
      headers:new HttpHeaders({'Content-Type':'application/json'})
    }

    let api =  "http://127.0.0.1:3000/doLogin"; 

    const stream=this.http.post(api,{name:'张三',age:201},httpOptions);

    console.log(stream);

    stream.subscribe((res)=>{
      console.log("post请求的返回：",res);
    })
  }

  getJsonpData(){
    let api = 'http://a.itying.com/api/productlist';
    this.http.jsonp(api,'callback')
    .subscribe(res=>{
      console.log("jsonp请求的返回：",res);
    })
  }
}
