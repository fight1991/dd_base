
import config from '/config/config'
let token = dd.getStorage({key:'token'})
export default  {
  ajax:function(options){
    dd.httpRequest({
        headers:{ // 配置头参数
          'Content-Type': 'application/json;charset=UTF-8',
          'ssoToken':token
        },
        url: config.BASE_URL + options.url, // 配置url
        method: options.method || 'POST',  // 默认post请求
        data: {   // 配置入参
          sysId : config.SYSID,
          appWebFlag:'1',
          reqData:options.data
        },
        dataType: 'json',
        success: res => { // 过滤数据,取res.data传参给options.success
          options.success && options.success(res.data)
        },
        fail:options.fail
      })
  }
}