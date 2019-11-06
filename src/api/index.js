import request from './request';

// 主页列表数据
var getMovieList = (type, page) => {
  return request.get(`/gateway?cityId=110100&pageNum=${page}&pageSize=10&type=${type}&k=6645585`, {
      data: {
        'X-Host': "mall.film-ticket.film.list"
      }
    }

  )
}

// 轮播图数据
var getSwiperData = () => {
  return request.get("/gateway?type=2&cityId=110100&k=8554236", {
    data: {
      'X-Host': "mall.cfg.common-banner"
    }
  })
}

// 详情页数据
var getDetailData = (id, key) => {
  return request.get(`/gateway?filmId=${id}&k=${key}`, {
    data: {
      'X-Host': "mall.film-ticket.film.info"
    }
  })
}

// 城市列表
var getCityData = () => {
  return request.get("/gateway?k=" + Date.now(), {
    data: {
      'X-Host': "mall.film-ticket.city.list"
    }
  })
}

// 影院列表
var getCinemaListData = (id,key) => {
  return request.get(`/gateway?cityId=${id}&ticketFlag=1&k=${key}`, {
    data: {
      'X-Host': "mall.film-ticket.cinema.list"
    }
  })
}

// 影院详情页
var getCinemaDetailData = (id,key) => {
  return request.get(`/gateway/?cinemaId=${id}&k=${key}`, {
    data: {
      'X-Host': "mall.film-ticket.cinema.info"
    }
  })
}

// 影院详情页2
var getCinemaDetailSecondData = (id,key) => {
  return request.get(`/gateway/?cinemaId=${id}&k=${key}`, {
    data: {
      'X-Host': "mall.film-ticket.film.cinema-show-film"
    }
  })
}

//  影院详情页3
var getCinemaFilmInfo =(filmId,cinemaId,date)=> {
  return request.get(`/gateway/?filmId=${filmId}&cinemaId=${cinemaId}&date=${date}&k=6642127`,{
    data:{
      'X-Host':"mall.film-ticket.schedule.list"
    }
  })
}

// news
var getDataNew=()=>{
  return request.get("/gateway?actId=ElzMZU125260",
  {
    data:{
      'X-Host':"mall.act.static-page.info"
    }
  })
}

export {
  getMovieList,
  getSwiperData,
  getDetailData,
  getCityData,
  getCinemaListData,
  getCinemaDetailData,
  getCinemaDetailSecondData,
  getCinemaFilmInfo,
  getDataNew
}