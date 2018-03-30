import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const state = {
  editorElement: {}, // 正在编辑的元素
  editorPage: {
    elements: [{
      "type": "pic",
      "imgSrc": "/image/zc.jpg",
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
      "bg": "",
      "fontSize": 18,
      "fontFamily": "微软雅黑",
      "fontWeight": "normal",
      "color": "#000000",
      "zindex": 100
    }]
  }, // 正在编辑的页面
  themeList: [], // 用户所有主题列表
  editorTheme: {
    title: '',
    description: '',
    canvasHeight: 504
  }, // 正在编辑的主题
  picList: [] // 图片列表
}

export default{
  state,
  getters,
  actions,
  mutations
}
