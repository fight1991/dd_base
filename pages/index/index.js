Page({
  data: {
    imgUrls: [
      {
        id:1,
        src:'/images/img01.jpg'
      },
      {
        id:2,
        src:'/images/img02.jpg'
      },
      {
        id:3,
        src:'/images/img03.jpg'
      }
    ],
    interval:2000,
    localGridList:[
        {
          "icon": "/images/more.png",
          "text": "自定义"
        }
      ],
    itemList:[
      {
        id:1,
        title:'通知公告',
        list: [
          { 
            pid:1,
            brief: '但嫩恩恩嫩嗯嗯嗯呃嗯嗯嗯嫩恩恩但嫩恩恩嫩嗯嗯嗯呃嗯嗯嗯嫩恩恩额额呢额额呢',
            time:'2019-01-09'
          },
          {
            pid:2,
            brief: '但嫩恩恩嫩嗯嗯嗯呃但嫩恩恩嫩嗯嗯嗯呃嗯嗯嗯嫩恩恩额额呢嗯嗯嗯嫩恩恩额额呢',
            time:'2019-01-09'
          },
          {
            pid:3,
            brief: '但嫩恩恩嫩嗯嗯嗯呃嗯嗯嗯嫩恩恩额额呢',
            time:'2019-01-09'
          }
        ]
      },
      {
        id:2,
        title:'政策法规',
        list: [
          {
            pid:1,
            brief: '坎坎坷坷军二但嫩恩恩嫩嗯嗯嗯呃嗯嗯嗯嫩恩恩额额呢扩和军二军可军可解决了来劲儿啊借记卡了解',
            time:'2019-01-08'
          },
          {
            pid:2,
            brief: '坎坎坷坷军二扩和军二军可军可解决了来劲儿啊借记卡了解',
            time:'2019-01-08'
          },
          {
            pid:3,
            brief: '坎坎坷坷军二扩和军二军可军可解决了来劲儿啊借记卡了解',
            time:'2019-01-08'
          }
        ]
      },
      {
        id:3,
        title:'动态信息',
        list: [
          {
            pid:1,
            brief: '坎坎坷坷军二但嫩恩恩嫩嗯嗯嗯呃嗯嗯嗯嫩恩恩额额呢扩和军二军可军可解决了来劲儿啊借记卡了解',
            time:'2019-01-08'
          },
          {
            pid:2,
            brief: '坎坎坷坷军二扩和军二军可军可解决了来劲儿啊借记卡了解',
            time:'2019-01-08'
          },
          {
            pid:3,
            brief: '坎坎坷坷军二扩和军二军可军可解决了来劲儿啊借记卡了解',
            time:'2019-01-08'
          }
        ]
      },
    ]
  },
  onItemClick: function({detail:{index}}) {
    let idx = this.data.localGridList.length -1 // 最后一项的索引
    let url = '../navDetail/navDetail'
    if(index === idx){
      url = '../doSelf/doSelf'
    }
    dd.navigateTo({
        url: url
      })
  },
  onLoad(query) {
    //  dd.utils.fetch({
    //   url:'/saas-activity/mockExam/getTemplateContent',
    //   data:{
    //     caseId: "2",
    //     templateType: "I_DEC"
    //   }
    // }).then(res => {
    //   console.log(res)
    // })
    // dd.utils.ajax({
    //   url:'/saas-activity/mockExam/getTemplateContent',
    //   data:{
    //     caseId: "2",
    //     templateType: "I_DEC"
    //   },
    //   success:res => {
    //     console.log(res)
    //   },
    //   fail:res => {
    //     console.log(res)
    //   }
    // })
    // 读取本地存储
    if(!dd.getStorageSync({key:'indexGridList'}).data) return
    let indexGridList = dd.getStorageSync({key:'indexGridList'}).data
    console.log(indexGridList)
    this.$spliceData({
      'localGridList':[0,-1,...indexGridList]
    })
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    dd.alert({
      title:'你点击标题了'
    })
    // 标题被点击
  },
  onPullDownRefresh() {
    console.log('哈哈')
    // 页面被下拉
    dd.confirm({
      title:'当前时间',
      content:(new Date).toLocaleString(),
      success: (result) => {
         dd.stopPullDownRefresh()
      },
    })
  },
  onReachBottom() {
    // 页面被拉到底部
  }
});
