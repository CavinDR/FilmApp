<template>
  <div v-if="obj.item">
    <div @click="go" class="iconfont" id="go">&#xe502;</div>
    <div class="film-img">
      <img :src="obj.poster" />
    </div>

    <div class="film-detail">
      <div class="film-name">
        <span class="name">{{obj.name}}</span>
        <span class="item">{{obj.filmType.name}}</span>
      </div>

      <div class="film-grade">
        <span class="grade">{{obj.grade}}</span>
        <span class="grade-text">分</span>
      </div>

      <div class="film-category">{{obj.category}}</div>
      <!-- 转换时间戳 -->
      <div class="film-premiere-time">{{obj.premiereAt|dateFormat}}上映</div>

      <div class="film-nation-runtime">
        <span>{{obj.nation}}</span>
        <span>|</span>
        <span>{{obj.runtime}}分钟</span>
      </div>

      <div class="shows hiddens" id="shows">
        <p>{{obj.synopsis}}</p>
      </div>
      <div class="showDown-btn">
        <span @click="show" v-if="isShow" class="iconfont icon-xia" id="upDown"></span>
        <span @click="hidden" v-else class="iconfont icon-shang" id="upDown"></span>
      </div>

      <div class="actors">
        <div class="actors-title-bar">
          <span>演职人员</span>
        </div>

        <div class="row-scroll-wrapper-actors-list">
          <ul>
            <li v-for="(item,index) in obj.actors" :key="index">
              <div>
                <img :src="item.avatarAddress" />
              </div>
              <span class="onespan">{{item.name}}</span>
              <span>{{item.role}}</span>
            </li>
          </ul>
        </div>

        <div class="photos">
          <div class="photos-title-bar">
            <span>剧照</span>
            <span class="iconfont"  @click="goImg(item)">全部({{obj.photos.length}})&#xe705;</span>
          </div>

          <ul v-if="obj.photos!=undefined&&obj.photos.length>0">
            <li v-for="(item,index) in obj.photos" :key="index">
              <div>
                <img :src="item" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="ticket" >
      <span >选座购票</span>
    </div>
    
  </div>
</template>

<script>
import { getDetailData } from "@/api";
export default {
  data() {
    return {
      obj: {},
      isShow: true,
      isHidden: false
    };
  },

  // 过滤器
  filters: {
    // 拿到的数据是秒数所以要进行时间戳转化
    dateFormat(value) {
      var date = new Date(value * 1000),
        Y = date.getFullYear(),
        M = date.getMonth() + 1,
        D = date.getDate(),
        d = date.getDay();
      switch (d) {
        case 1:
          d = "周一";
          break;
        case 2:
          d = "周二";
          break;
        case 3:
          d = "周三";
          break;
        case 4:
          d = "周四";
          break;
        case 5:
          d = "周五";
          break;
        case 6:
          d = "周六";
          break;
        case 7:
          d = "周日";
          break;
      }
      date = Y + "-" + M + "-" + D;
      return date;
    }
  },

  // 监控数据变化
  watch: {
    $route: {
      handler(n, o) {
        var id = n.params.id;
        var key = new Date().getTime();
        this.getData(id, key);
      },
      deep: true,
      immediate: true
    }
  },
  // 接收数据
  methods: {
    getData(id, key) {
      // console.log(123);
      getDetailData(id, key).then(res => {
        // this.obj = this.obj.concat(res.data.datafilm)
        this.obj = res.data.data.film;
        console.log(res);
      });
    },

    // 设置详情，收起显示或隐藏
    show() {
      var sh = document.querySelector("#shows");
      sh.setAttribute("class", "shows");
      this.isShow = false;
    },
    hidden() {
      var hi = document.querySelector("#shows");
      hi.setAttribute("class", "hiddens");
      this.isShow = true;
    },

    //跳转
    go() {
      this.$router.push("/home");
    },
    goImg(item){
      this.$router.push({"name":"DetailIMG",params:{item}})
    }
  }
};
</script>

<style lang="scss">
* {
  font: 12px/1.5 Tahoma, Helvetica, Arial, sans-serif;
  font-family: Microsoft YaHei, Tahoma, Helvetica, Arial, sans-serif;
}
.film-img {
  img {
    width: 100%;
    height: 525.2px;
  }
}
.film-detail {
  width: 100%;
  height: 303px;
  padding: 15px;
  padding-top: 12px;
  background-color: #fff;
  position: absolute;
  top: 369px;
  right: 0;
  left: 0;
  .film-name {
    width: 256px;
    height: 24px;
    float: left;
    .name {
      color: #191a1b;
      font-size: 18px;
      height: 24px;
      line-height: 24px;
      margin-right: 7px;
    }
    .item {
      font-size: 9px;
      color: #fff;
      background-color: #d2d6dc;
      height: 14px;
      line-height: 14px;
      padding: 0 2px;
      border-radius: 2px;
      display: inline-block;
    }
  }

  .film-grade {
    text-align: right;
    color: #ffb232;
  }

  .film-category {
    width: 100%;
    height: 19px;
    font-size: 13px;
    color: #797d82;
    margin-top: 4px;
    display: flex;
  }
  .film-premiere-time {
    font-size: 13px;
    color: #797d82;
    margin-top: 4px;
  }
  .film-nation-runtime {
    font-size: 13px;
    color: #797d82;
    margin-top: 4px;
    span {
      margin-right: 6px;
    }
  }

  .film-synopsis-show {
    width: 100%;
    height: 152px;
    margin-top: 12px;
    font-size: 13px;
    color: #797d82;
  }
  .shows {
    width: 100%;
    height: 152px;
    margin-top: 12px;
    font-size: 13px;
    color: #797d82;
    transition: height 1s;
  }
  .hiddens {
    width: 100%;
    height: 40px;
    margin-top: 12px;
    font-size: 13px;
    color: #797d82;
    overflow: hidden;
    transition: height 1s;
    p {
      height: 40px;
    }
  }
  .showDown-btn {
    width: 100%;
    height: 16px;
    display: inline-block;
    text-align: center;
    // position: absolute;
    // top: 53%;
  }
  #upDown {
    display: inline-block;
  }
}

.actors {
  width: 100%;
  height: 192.5px;
  margin-top: 10px;
  .actors-title-bar {
    width: 100%;
    padding: 15px;
    span {
      font-size: 16px;
      text-align: left;
      color: #191a1b;
    }
  }
  .row-scroll-wrapper-actors-list {
    height: 140px;
    background: rgb(255, 255, 255);
    // overflow-y: hidden;
    ul {
      width: 100%;
      overflow: scroll;
      display: flex;
      float: left;
      li {
        width: 85px;
        height: 100%;
        float: left;
        margin-right: 10px;
        div {
          width: 85px;
          height: 85px;
          img {
            width: 85px;
            height: 85px;
          }
        }
        .onespan {
          margin-top: 11px;
        }
        span {
          padding-top: -4px;
          font-size: 12px;
          color: #191a1b;
          width: 85px;
          height: 18px;
          display: block;
          overflow: hidden;
          -o-text-overflow: ellipsis;
          text-overflow: ellipsis;
          white-space: nowrap;
          text-align: center;
        }
      }
    }
  }
}

.photos {
  width: 100%;
  height: 213.5px;
  margin-top: 10px;
  .photos-title-bar {
    width: 100%;
    padding: 15px;
    span:nth-child(2) {
      font-size: 13px;
      color: #797d82;
      float: right;
    }
  }

  ul {
    width: 100%;
    overflow: scroll;
    display: flex;
    float: left;
    li {
      width: 150px;
      height: 99.97px;
      float: left;
      margin-right: 10px;
      div {
        width: 150px;
        height: 99.97px;
        img {
          width: 150px;
          height: 99.97px;
        }
      }
    }
  }
}

.ticket {
  height: 49px;
  position: fixed;
  bottom: 0px;
  width: 100%;
  span {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 49px;
    width: 100%;
    text-align: center;
    background-color: #ff5f16;
    color: #fff;
    font-size: 16px;
    line-height: 49px;
  }
}
#go {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: #d2d6dc;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 38px;
  opacity: 0.5;
  border-radius: 20px;
}
</style>