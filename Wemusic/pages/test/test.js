// pages/test/test.js
var util = require('../../utils/util.js');  
Page({

  /**
   * 页面的初始数据
   */

  data: {
    sign:"今 日 签 到",
    btnColor:"#f1c74a",
    conDays:"10",
    sumDays:"20",
    grade:"6",
    days:"1024",
    signDate:"",
    disabled:false,
    url_select: 'https://www.seanxu.club/music?operation=select&id=',
    url_update: 'https://www.seanxu.club/music?operation=update&id=',
  },
  signBtn: function (e) {
    todayDate = util.formatTime(new Date())
    this.setData({
        sign: "已 签 到",
        btnColor:"#faedbd",
        disabled: true
    })
    wx.request({
      // 请求服务器 url 发送签到请求
      url: this.data.url_update + app.globalData.openid + '&signDate=' + todayDate,
      //点击签到后sign=1
      method: 'GET',
      //请求成功
      success: (res) => {
        // 返回状态码 200
        console.log(res.data);
        that.setData({
          signDate: res.data.todayDate,
        })
        },
      fail: (res) => {
        console.log("fail");
        console.log(res.errMsg);
      },
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  signInit:function(){
    wx.request({
      // 请求服务器 url 发送签到请求
      url: this.data.url_update + app.globalData.openid + '&signDate',
      method: 'GET',
      //请求成功
      success: (res) => {
        // 返回状态码 200
        console.log(res.data);
        that.setData({
          signDate: res.data.signDate,
        })
      },
      fail: (res) => {
        console.log("fail");
        console.log(res.errMsg);
      },
    });
    if(signData == util.formatTime(new Date())) {
      this.setData({
        sign: "已 签 到",
        btnColor: "#faedbd",
        disabled: true
      })
    }
  },
  conDaysInit: function(){
    wx.request({
      // 请求服务器 url 发送签到请求
      url: this.data.url_select + app.globalData.openid + '&conDays',
      //查询连续天数
      method: 'GET',
      //请求成功
      success: (res) => {
        // 返回状态码 200
        console.log(res.data);
        that.setData({
          conDays: res.data.conDays,
        })
      },
      fail: (res) => {
        console.log("fail");
        console.log(res.errMsg);
      },
    });
  },
  sumDaysInit: function () {
    wx.request({
      // 请求服务器 url 发送签到请求
      url: this.data.url_select + app.globalData.openid + '&sumDays',
      //查询连续天数
      method: 'GET',
      //请求成功
      success: (res) => {
        // 返回状态码 200
        console.log(res.data);
        that.setData({
          sumDays: res.data.sumDays,
        })
      },
      fail: (res) => {
        console.log("fail");
        console.log(res.errMsg);
      },
    });
  },
  daysInit: function () {
    wx.request({
      // 请求服务器 url 发送签到请求
      url: this.data.url_select + app.globalData.openid + '&days',
      //查询连续天数
      method: 'GET',
      //请求成功
      success: (res) => {
        // 返回状态码 200
        console.log(res.data);
        that.setData({
          days: res.data.days,
        })
      },
      fail: (res) => {
        console.log("fail");
        console.log(res.errMsg);
      },
    });
  },
  gradeInit: function () {
    wx.request({
      // 请求服务器 url 发送签到请求
      url: this.data.url_select + app.globalData.openid + '&grade',
      //查询连续天数
      method: 'GET',
      //请求成功
      success: (res) => {
        // 返回状态码 200
        console.log(res.data);
        that.setData({
          grade: res.data.grade,
        })
      },
      fail: (res) => {
        console.log("fail");
        console.log(res.errMsg);
      },
    });
  },
  onLoad: function (options) { 
    this.signInit()
    this.conDaysInit()
    this.sumDaysInit()
    this.gradeInit()
    this.daysInit()   
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