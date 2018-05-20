// pages/test/test.js
var util = require('../../utils/util.js');  
var total_day=0;
var continue_day=0;
var max_continue_day=0;
var todayDate=0;
var sign_day=0;
var rank=0;
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sign:"今 日 签 到",
    btnColor:"#f1c74a",
    conDays:"0",
    maxDays:"0",
    grade:"0",
    days:0,
    signDate:"00000000",
    btnDisabled:false,
    url_select: 'https://www.seanxu.club/music?operation=select&id=',
    url_update: 'https://www.seanxu.club/music?operation=update&id=',
  },
  signBtn: function (e) {
    total_day = total_day + 1;
    continue_day = continue_day + 1;
    max_continue_day = max_continue_day + 1;
    this.setData({
      sign: "已 签 到",
      btnColor: "#faedbd",
      btnDisabled: true,
    })
    wx.request({
      // 请求服务器 url 发送签到请求
      url: this.data.url_update + app.globalData.openid + '&item_name=sign_day&item_value='+todayDate,
      //url: this.data.url_update + '0'+'&item_name=sign_day&item_value='+todayDate,
      method: 'GET',
      //请求成功
      success: (res) => {
        // 返回状态码 200
        console.log("success");
        },
      fail: (res) => {
        console.log("fail");
        console.log(res.errMsg);
      },
    });
    wx.request({
      // 请求服务器 url 发送签到请求
      url: this.data.url_update + app.globalData.openid + '&item_name=total_day&item_value=' +total_day,
      //url: this.data.url_update + '0' + '&item_name=total_day&item_value=' +total_day,
      //点击签到后sign=1
      method: 'GET',
      //请求成功
      success: (res) => {
        // 返回状态码 200
        console.log("success");
      },
      fail: (res) => {
        console.log("fail");
        console.log(res.errMsg);
      },
    });
    wx.request({
      // 请求服务器 url 发送签到请求
      url: this.data.url_update + app.globalData.openid + '&item_name=max_continue_day&item_value=' + max_continue_day,
      //url: this.data.url_update + '0' + '&item_name=max_continue_day&item_value=' + max_continue_day,
      method: 'GET',
      //请求成功
      success: (res) => {
        // 返回状态码 200
        console.log("success");
      },
      fail: (res) => {
        console.log("fail");
        console.log(res.errMsg);
      },
    });
    wx.request({
      // 请求服务器 url 发送签到请求
      url: this.data.url_update + app.globalData.openid + '&item_name=continue_day&item_value=' + continue_day,
      //url: this.data.url_update + '0' + '&item_name=continue_day&item_value=' + continue_day,
      //点击签到后sign=1
      method: 'GET',
      //请求成功
      success: (res) => {
        // 返回状态码 200
        console.log("success");
      },
      fail: (res) => {
        console.log("fail");
        console.log(res.errMsg);
      },
    });
    wx.request({
      // 请求服务器 url 发送签到请求
      url: this.data.url_select + app.globalData.openid,
      //url: this.data.url_select + '0',
      method: 'GET',
      //请求成功
      success: (res) => {
        // 返回状态码 200
        console.log(res.data);
        this.setData({
          conDays: res.data.continue_day,
          maxDays: res.data.max_continue_day,
          sumDays: res.data.total_day,
          grade: res.data.rank,
          days: res.data.total_day,
          signDate: res.data.sign_day
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
    todayDate = util.formatTime(new Date())
    wx.request({
      // 请求服务器 url 发送签到请求
      url: this.data.url_select + app.globalData.openid,
      //url: this.data.url_select + '0',
      method: 'GET',
      //请求成功
      success: (res) => {
        // 返回状态码 200
        console.log(res.data);
        total_day=res.data.total_day;
        continue_day=res.data.continue_day;
        max_continue_day=res.data.max_continue_day;
        sign_day=res.data.sign_day;
        rank = parseInt(total_day / 10)
        this.setData({
          conDays: continue_day,
          maxDays: max_continue_day,
          sumDays: total_day,
          grade: rank,
          days: total_day,
          signDate: sign_day
        })
        if (sign_day == todayDate) {
          this.setData({
            sign: "已 签 到",
            btnColor: "#faedbd",
            btnDisabled: true
          })
        }
        else {
          this.setData({
            sign: "今 日 签 到",
            btnColor: "#f1c74a",
            btnDisabled: false
          })
        }
      },
      fail: (res) => {
        console.log("fail");
        console.log(res.errMsg);
      },
    });
    
  },
  onLoad: function (options) { 
    this.signInit() 
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