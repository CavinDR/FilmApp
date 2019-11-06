import request from '@/utils/request'
export const getcode = (params = { tel: '' }) => {
  return request({
    url: '/gateway',
    method: "post",
    data: {
      xHost: 'mall.user.sms-code.send',
      "imgCode": "",
      "imgKey": "",
      "mobile": `${params.tel}`,
      "type": "1"
    }
  })
}

//登录
export const logincode = (params = { code: '', tel: '' }) => {
  return request({
    url: '/gateway',
    method: "post",
    data: {
      xHost: 'mall.user.sms-code-login',
      "extra": {},
      "imgCode": "",
      "imgKey": "",
      "mobile": `${params.tel}`,
      "smsCode": `${params.code}`,
    }
  })
}

//个人中心
export const getuserinfo = (params = { token: '' }) => {
  return request({
    url: '/gateway?k=9331378',
    method: "get",
    headers: {
      'X-Token': params.token
    },
    data: {
      xHost: 'mall.user.info.get',
    }
  })
}