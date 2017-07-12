/*
 * 
 * WordPress连接微信小程序
 * 作者 (author): 李光春 部分代码二次开发，谢谢好心人提醒（特别是那种使用别人的代码，而传说中的原来的作者代码也和别人的一样  （/笑脸）） （谁真谁假）
 * 详述 (detail)：https://liguangchun.cn/26
 * 码云 (oschina)：http://git.oschina.net/aizhinengnet/wordpress-connect-wechat-applet
 * GitHub: https://github.com/GC0202/WordPress-connect-WeChat-applet
 * 码云 (Gitee)：https://gitee.com/aizhinengnet/wordpress-connect-wechat-applet
 * 码市 (Coding)：https://coding.net/liguangchun/WordPress-connect-WeChat-applet
 * 阿里云 (aliyun): https://code.aliyun.com/GC/WordPress-connect-WeChat-applet
 * CSDN: https://code.csdn.net/qq_25745249/wordpress-connect-wechat-applet
 * GitLab：https://gitlab.com/liguangchun/WordPress-connect-WeChat-applet.git
 * cooperation：https://www.oschina.net/p/wordpress-connect-wechat-applet
 * 技术支持微信号：GC19980202
 * The MIT License (MIT)
 * Copyright (c) 2017 李光春
 * 
 */

//app.js
App({
  serverUrl:'https://liguangchun.cn/', //你的网址
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userInfo:null
  }
})