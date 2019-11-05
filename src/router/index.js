import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from "@/views/film/film.vue"
import Cinema from "@/views/cinema/cinema.vue"
import News from "@/views/news/news.vue"
import User from "@/views/user/user.vue"
import Home from "@/views/home/home.vue"
import FilmList from "@/views/film/filmlist.vue"
import Detail from "@/components/Detail.vue"
import DetailIMG from "@/components/DetailIMG.vue"

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
    path: '/cinema',
    component: Cinema,
    meta: {
      flag: true
    }
  },
  {
    path: '/news',
    component: News,
    meta: {
      flag: false
    }
  },
  {
    path: '/user',
    component: User,
    meta: {
      flag: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router