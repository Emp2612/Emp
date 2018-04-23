// pages/inquiry/inquiry.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // indexSize: 0,
    // indicatorDots: false,
    // autoplay: false,
    // duration: 0, //可以控制动画
    // list: '',
    // detail: [
    //   {
    //     id: 1,
    //     title: '内科',
    //     list: [
    //       { title: '呼吸内科', },
    //       { title: '消化内科', },
    //       { title: '心血管内科', },
    //       { title: '神经内科', },
    //       { title: '肿瘤科', },
    //       { title: '内分泌科', },
    //       { title: '血液内科', },
    //       { title: '传染病科', },
    //     ]
    //   },
    //   {
    //     id: 2,
    //     title: '外科',
    //     list: [
    //       { title: '普通外科', },
    //       { title: '泌尿外科', },
    //       { title: '心胸外科', },
    //       { title: '神经外科', },
    //     ]
    //   },
    // ],
    // section: [
    //   {
    //     id: 1,
    //     name: "111",
    //     ishaveChild: true,
    //     secsection: [
    //       {
    //         secid: 1,
    //         secname: "222",
    //       }
    //     ]
    //   }
    // ],
    // curleftId: 1,
    // itemIndex: 0
    title1: 123,
    title2: 456
  },
  // change(e) {
  //   this.setData({
  //     indexSize: e.detail.current
  //   })
  // },
  // scrollTo(e) {
  //   this.setData({
  //     indexSize: e.target.dataset.index
  //   })
  // },
  kemu_selected: function (event) {
    if (event.currentTarget.id == "text1") {
      this.setData({
        title1: 888,
        title2: 777,
      }

      );
    } else {

    }

  },
  // selectsection: function () {
  //   var id = e.target.dataset.id;
  //   var index = e.target.dataset.index
  //   this.setData({
  //     curleftId: id,
  //     itemIndex: index,
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //初始化数据
    // var self = this;
    // self.getFilter();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})