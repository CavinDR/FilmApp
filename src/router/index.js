import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from "@/views/film/film.vue"
import News from "@/views/news/news.vue"
import UserCenter from "@/views/user/userCenter.vue"
import SetUp from "@/views/user/setUp.vue"
import Home from "@/views/home/home.vue"
import FilmList from "@/views/film/filmlist.vue"
import Detail from "@/components/Detail.vue"
import DetailIMG from "@/components/DetailIMG.vue"
import  LocationCity from "@/components/locationCity.vue"

import Cinema from "@/views/cinema/cinema.vue"
import CinemaList from "@/views/cinema/cinemaList.vue"
import CinemaDetail from "@/views/cinema/cinemaDetail.vue"

Vue.use(VueRouter)

const routes = [{
    path: '/',
    redirect: {
      "name": "home"
    },
    meta: {
      flag: true
    }
  },

  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      flag: true
    },
    redirect: {
      'name': "film"
    },
    children: [{
        path: '/film',
        "name": "film",
        component: Film,
        redirect: {
          'path': '/film/nowPlaying'
        },
        children: [{
            path: ':type',
            "name": "filmlist",
            component: FilmList,
            meta: {
              flag: true
            }
            
          }

        ]
      }


    ]
  },

  {
    path: '/Detail/:id',
    name: 'Detail',
    component: Detail,
    meta:{
      flag:false
    }
  },
  {
    path: '/DetailIMG/:id',
    name: 'DetailIMG',
    component : DetailIMG,
    // meta:{
    //   flag:false
    // }
  },
  {
    path: '/locationCity',
    name: 'LocationCity',
    component : LocationCity

  },







  {
    path: '/cinema',
    component: Cinema,
    meta: {
      flag: true
    }
  },
  {
    path: '/cinemaList/:id',
      component: CinemaList,
  },
  {
    path: '/cinemaDetail/:id',
      component: CinemaDetail,
  },

  {
    path: '/news',
    component: News,
    meta: {
      flag: false
    }
  },
  {
    path: '/userCenter',
    component: UserCenter,
    meta: {
      flag: true
    },
  },
  {
    path: '/setUp',
    component: SetUp,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router