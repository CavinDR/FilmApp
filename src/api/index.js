import request from './request';

// 主页列表数据
var getMovieList =(type,page)=>{
   return request.get(`/gateway?cityId=110100&pageNum=${page}&pageSize=10&type=${type}&k=6645585`,{
    data:{
        'X-Host':"mall.film-ticket.film.list"
       }
     }
   
   )
}

// 轮播图数据
var getSwiperData =()=>{
  return request.get("/gateway?type=2&cityId=110100&k=8554236",{
    data:{
      'X-Host':"mall.cfg.common-banner"
    }
  })
}

// 详情页数据
var getDetailData =(id,key)=>{
  return request.get(`/gateway?filmId=${id}&k=${key}`,{
    data:{
      'X-Host':"mall.film-ticket.film.info"
    }
  })
}

var getCityData =()=>{
  return request.get(`/gateway?k=4194652`,{
    data:{
      'X-Host':"mall.film-ticket.city.list"
    }
  })
}




export {getMovieList,getSwiperData,getDetailData}