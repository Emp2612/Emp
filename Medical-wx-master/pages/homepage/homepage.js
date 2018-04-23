// pages/homepage/homepage.js
var app = getApp()
var fileData = require('../../utils/data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // banner 初始化
    banner_url: fileData.getBannerData(),
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    // nav 初始化
    navTopItems: fileData.getIndexNavData(),
    navSectionItems: fileData.getIndexNavSectionData(),
    curNavId: 1,
    curIndex: 0
  },
  onLoad: function () {
    var that = this
    that.setData({
      list: that.data.navSectionItems
    })
  },
  //导航icon跳转
  navTopItems: function (e) {
    var data = e.currentTarget.dataset
    console.log(data)
    // console.log(this.data.navTopItems)
    if (data.id==1) {
      wx.navigateTo({
        url: '../inquiry/inquiry?artype=' + e.currentTarget.dataset.artype
      })
    }
    else {
      wx.navigateTo({
        url: '../order/order?artype=' + e.currentTarget.dataset.artype
      })
    }
  },
  navigateDetail: function (e) {
    wx.navigateTo({
      url: '../division/division?artype=' + e.currentTarget.dataset.artype
    })
  },
  loadMore: function (e) {
    console.log('加载更多')
    var curid = this.data.curIndex

    if (this.data.navSectionItems[curid].length == 0) return

    var that = this
    that.data.navSectionItems[curid] = that.data.navSectionItems[curid].concat(that.data.navSectionItems[curid])
    that.setData({
      list: that.data.navSectionItems,
    })
  },
  bookTap: function (e) {
    wx.navigateTo({
      url: '../book/book?aid=' + e.currentTarget.dataset.aid
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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