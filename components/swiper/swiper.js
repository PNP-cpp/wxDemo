// pages/components/swiper.js
Component({
  lifetimes: {
    create(){
      this
    },
    attached() {
      // 在组件实例进入页面节点树时执行
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    imgUrls: [
      '../../images/swiper/eatFood.jpg',
      '../../images/swiper/hotle.jpg',
      '../../images/swiper/takeOut.jpg',
      '../../images/swiper/watchMovie.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeIndicatorDots(e) {
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },
    changeAutoplay(e) {
      this.setData({
        autoplay: !this.data.autoplay
      })
    },
    intervalChange(e) {
      this.setData({
        interval: e.detail.value
      })
    },
    durationChange(e) {
      this.setData({
        duration: e.detail.value
      })
    }
  }
})