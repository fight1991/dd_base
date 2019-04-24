Page({
  data: {
     gridList:[
       { 
        title:'通关信息查询',
        navList:[
            {
              "icon": "/images/card.png",
              "text": "通关状态查询"
            },
            {
              "icon": "/images/card.png",
              "text": "海运舱单状态查询"
            },
            {
              "icon": "/images/card.png",
              "text": "空运舱单状态查询"
            },
            {
              "icon": "/images/card.png",
              "text": "公路舱单状态查询"
            },
            {
              "icon": "/images/card.png",
              "text": "公路舱单确报"
            }
          ]
        },
        { 
          title:'物流跟踪',
          navList:[
              {
                "icon": "/images/cloths.png",
                "text": "我的物流"
              },
              {
                "icon": "/images/shuma.png",
                "text": "创建委托"
              },
              {
                "icon": "/images/tourist.png",
                "text": "接单邀请"
              },
              {
                "icon": "/images/other.png",
                "text": "航班信息"
              }
            ]
          },
        { 
          title:'归类',
          navList:[
              {
                "icon": "/images/cloths.png",
                "text": "智能归类"
              },
              {
                "icon": "/images/shuma.png",
                "text": "归类决定"
              }
            ]
        }
      ]
    },
  onLoad() {}
})