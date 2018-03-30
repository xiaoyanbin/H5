/**
 * Created by zhengguorong on 2016/11/24.
 */
export default class Page {
  constructor (page = {}) {
    this.elements = page.elements || [{
      "type": "pic",
      "imgSrc": "/image/zc.png",
      "left": 0,
      "top": 0,
      "width": 320,
      "height": 400,
      "lineHeight": 0,
      "animatedName": "",
      "duration": 1,
      "delay": 0,
      "playing": false,
      "loop": false,
      "opacity": 100,
      "transform": 0,
      "text": "",
      "textAlign": "left",
      "iconKey": "",
      "bg": "zc",
      "fontSize": 18,
      "fontFamily": "微软雅黑",
      "fontWeight": "normal",
      "color": "#000000",
      "zindex": 100
    }]
  }
}
