Page({
  data: {
    newGridList:[],
    addGridList:[
      { 
        title:'通关参数',
        navList:[
            {
              "icon": "/images/cloths.png",
              "text": "关区",
              "type": "T"
            },
            {
              "icon": "/images/shuma.png",
              "text": "币制",
              "type": "T"
            },
            {
              "icon": "/images/tourist.png",
              "text": "计量单位",
              "type": "T"
            },
            {
              "icon": "/images/other.png",
              "text": "监管方式",
              "type": "T"
            },
            {
              "icon": "/images/cloths.png",
              "text": "成交方式",
              "type": "T"
            },
            {
              "icon": "/images/tourist.png",
              "text": "监管证件",
              "type": "T"
            },
            {
              "icon": "/images/shuma.png",
              "text": "港口",
              "type": "T"
            },
            {
              "icon": "/images/other.png",
              "text": "包装种类",
              "type": "T"
            }
          ]
        },
      { 
        title:'智慧通关',
        navList:[
            {
              "icon": "/images/cloths.png",
              "text": "税则",
              "type": "Z"
            },
            {
              "icon": "/images/shuma.png",
              "text": "3C目录",
              "type": "Z"
            },
            {
              "icon": "/images/tourist.png",
              "text": "法检目录",
              "type": "Z"
            },
            {
              "icon": "/images/other.png",
              "text": "规范申报要素",
              "type": "Z"
            },
            {
              "icon": "/images/cloths.png",
              "text": "统计商品目录",
              "type": "Z"
            },
            {
              "icon": "/images/tourist.png",
              "text": "CIQ编码",
              "type": "Z"
            }
          ]
        },
      ]
  },
  // onItemClickAdd: function({detail:{index}}) {
  //   // {detail:{index}}
  //   let item = this.data.addGridList[index]
  //   console.log(item)
  //   let last = this.data.newGridList.length
  //   console.log(last)
  //   this.$spliceData({ 'addGridList': [index, 1] })
  //   this.$spliceData({ 'newGridList': [last, -1,item]})

  // },
  onItemClickReduce: function({detail:{index}}) {
    if(this.data.newGridList.length === 0 ){
      return
    }
    let newData = this.data.newGridList[index]
    this.$spliceData({'newGridList':[index,1]})
    if(newData.type === 'T'){
      let last = this.data.addGridList[0].navList.length
      this.$spliceData({ 'addGridList[0].navList': [last, -1 ,newData]})
    }
    if(newData.type === 'Z') {
      let last = this.data.addGridList[1].navList.length
      this.$spliceData({ 'addGridList[1].navList': [last, -1 ,newData]})
    }
    
  },
  addIcon({target:{dataset:{info,index,idx}}}) {
    console.log(info,index,idx)
    let last = this.data.newGridList.length
    // let key = 'addGridList['+idx+'].navList'
    // console.log(key)
    this.$spliceData({ 'newGridList': [last, -1,info]})
    // this.$spliceData({ key : [index, 1]})
    if(idx === 0) {
      this.$spliceData({ 'addGridList[0].navList': [index, 1]})
    }
    if(idx === 1) {
      this.$spliceData({ 'addGridList[1].navList': [index, 1]})
      this.$spliceData({})
    }
    // this.$spliceData({ key : [index, 1]})
  },
  addConfirm() {
    // 将newGridList的数据存储在本地

    dd.setStorageSync({
      key:'indexGridList', 
      data:this.data.newGridList
    })
    // 将addGridList保存到本地
    dd.setStorageSync({
      key:'addGridList',
      data:this.data.addGridList
    })
    // 跳转到首页
    dd.reLaunch({
        url: '../index/index'
      })
  },
  onLoad() {
    // 如果本地有数据,用本地的
    let data1 = dd.getStorageSync({key:'addGridList'}).data
    let data2 = dd.getStorageSync({key:'indexGridList'}).data
    if(data1) {
      // 存在
      this.data.addGridList = data1
    }
    if(data2) {
      this.data.newGridList = data2
    }
  },
});
