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
var getDetailData =(id)=>{
  return request.get(`/gateway?filmId=4680&k=6399396`,{
    data:{
      'X-Host':"mall.film-ticket.film.info"
    },
    params: {
      movieId: id
  }
  })
}





export {getMovieList,getSwiperData,getDetailData}