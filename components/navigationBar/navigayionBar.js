// pages/navigationBar/navigayionBar.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text:{
      type:String,
      value:""
    }
  },

  /**2
   * 组件的初始数据
   */
  data: {
    height: app.globalData.navigayionBarHeight
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  created(){

  },
  attached(){
    console.log(this);
  },
  ready(){
    console.log(this);
  },
  options: {
    addGlobalClass: false,
  }
})
