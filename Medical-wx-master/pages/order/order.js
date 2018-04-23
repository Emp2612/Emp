// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    casArray: ['请选择区域', '昆明市', '曲靖市', '玉溪市', '红河州', '昆明市第一人民医院', '云南省第一人民医院',],
    casArray1: ['请选择医院', '昆明市第一人民医院', '云南省第一人民医院', '昆明市中医院', '昆明延安医院'],
    casArray2: ['请选择科室', '儿科', '内科', '外科', '神经科', '耳鼻喉科'],
    casIndex: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  bindCasPickerChange: function (e) {
    console.log('期望就诊城市', this.data.casArray[e.detail.value])
    // if (e.detail.value == 3) {
    //   this.setData({ reply: true })
    // } else {
    //   this.setData({ reply: false })
    // }

    this.setData({
      casIndex: e.detail.value
    })
  },
  submitItems:function(e){
    console.log(this.data.casArray)
    wx.navigateTo({
      url: '../detail/detail?artype=' + e.currentTarget.dataset.artype
    })
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