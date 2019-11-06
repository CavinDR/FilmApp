<template>
  <div class="main">
    <div class="cinema-schedule" v-for="(item,index) in obj" :key="index">
      <div class="header-left">
        <router-link to="/cinema">
          <span></span>
        </router-link>
      </div>
      <div class="header-title">{{item.name}}</div>
      <div class="cinema-wrap">
        <div class="cinema-info">
          <div class="tags">
            <div class="tag" v-for="(items,index) in item.services" :key="index">{{items.name}}</div>
          </div>

          <div class="address">
            <img
              src="data:image/png;base64,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"
              alt
            />
            <div class="address-des">{{item.address}}</div>

            <div class="iconfont tele">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAA2CAMAAABdslGrAAACJVBMVEVHcEwhISEzMzMZHBwZMzMZGhsZGxsZGhsZGhv///8ZGxsbGxsfHx8kJCQaGh0bGxsZGhsZJiYqKioaGhwZHR0ZGhsZGhsZGxsZGhsaGh5VVVV/f38ZGhscHBwZGhsZGhsaGigZGhsZGhwZGhsZGhsaGh8ZGhsaGhsbGxsaGhsaGhsZHBwaGh0fHx8nJycZGhwZGxscHBwZGxsZGhscHBwbGxsZGxsaGhsaGhscHBwaGiAZGxsaGhsaGhwZHBwZGxsaGh4ZGhsZGhsZGhsZGxsZGhscHBwZGhsaGhwdHR0fHx8ZGhwZGxsZGhwkJCQaGiMZGhsZGhsbGxsdHR0ZGhsbGxsaGhsaGhsaGhsZGxscHBwbGxsZGxsZGhwZHx8ZGxsaGhseHh4aGh0cHBwbGxsZHh4bGxsaGhsZGhweHh4ZGxsZGxsZGhsZHh4ZGxsaGhseHh4cHBw/Pz8ZGhsfHx8ZGxsZGxsZGhsaGh0ZGxsZGhwcHBwaGhsaGhwbGxsZGhwZGhwZGxsZGhsZGhwZGxsaGhsiIiIZGhsZGhscHBwZHBwaGhwqKioZGhwZGhsaGh8ZIiIaGhseHh4ZGxsaGhwbGxsbGxsZGxsZGxsZGhsaGh8ZGhwaGh0ZGhsZGhsZGxsZGhwaGh0aGhwZHBwaGhwbGxsZGxsaGh0ZGxsbGxsfHx8eHh4ZGhsdHR0ZGhsbGxsZGhsZGhsZHR0ZGhsZGhwaGhwZGhuqFRxRAAAAtnRSTlMAFwVZCvqy/v0Bl2cQB2kl5RQGYT3M+NnKQwMC8iTq8BP7vfbtMO65QsOldk4gDceDPs75G16zkq4SJ52TiFtuTOfd5Kr3CfR/Iwi1oNoVHfPWcTS3L5u6nLtISWW/KHfrImg/SjNBxLQqlajUO8bXITUE6RiEje9Wiq029WpA45mx0qNvpBbByy1kYgyr5jkerxGMkS43eGbbMch78dWe0V+FbHxUgXJ5XCkZ4CvJOOj8RdOYkJ3guaYAAAJ3SURBVBgZvcEFcxNRAEbRr22S3dTd3XApLoVCi7u7u7u7u7u7u97fR5NNCkM2vGWY4Rz9m025DUH9jQHJmUC7Ennma7QIS5JXqT1o5c+EU/LoXDcgryg7qwZy5c04sJcEJR2Cy/KkzoYchSywsEfLiwAMk2MsNMqDtBqsMjmKYGSqzJbCV0U9goUyS4dvinoMLYkySofvisoeCoNltASS1eYe5MloGXxQm8oaWCqT1CrsCWqTDIdlNB9y1GaAhZ0hk5fQTz/1gd0yKYORYxTVqwOsktFkWKaInFIgSUaDYKAc6y2wO8nsBgyfoLDNwDx5cRdeyLEHugXlwXNYNEJhXYZDb3lQ3AzpcnSHC1fkwVMYX6Iw30EYG5SZrxZuyTHEglHy4BnUn5DjCdhzZZY2Ho7KUTIT6hfIrAhoL0flO/j0XmbHoSBNjuWlsKhORgk7oa8iPlZA/VSFrBjVOah4UoCzilheC5NeS4kzgHYJimct9LyoiOnlwLj+AUK2zlEcvh4wtJci3kwG9gErbbB2ZMvdpXIoHKEI30NCktU+E8jLkLsGP5zsqqjBpTCtWMrqA0zqLXcpQGF/RWX0W+NTSFM+0LGrXB2z4EiCYkzfCDTvlaszNhRMVAzfLMDfKSg3SVVQPlexdlUAsxPkpnM+WFcTFaPLBmBdqtzktgCFoxVjy3Yb9stVZQC4n1KsGB0gXXE05QMPhug3ddBzm+K5U0Cr+VP1q8RqGKj4xtysAKxhB4KKCnYEa7X+JOuan1a3X71V2OKZwBQZlJ0n5HNg3pc5KQE/MEhmp/vW8lNVd3mSllRtEWZVX5dnixfOmj1txpSJ+t9+AAZEC6aFGvT2AAAAAElFTkSuQmCC"
                alt
              />
            </div>
          </div>
        </div>
      </div>
      <div class="schedule-wrap">
        <div class="film-bg"></div>
        <div class="film-list">
          <div class="swiper-container cinema-detail-banner">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item in cinemaFilmList" :key="item.filmId">
                <img :src="item.poster" />
              </div>
            </div>
          </div>
        </div>
        <div class="film-info" v-if="filmContent">
          <div class="film-head">
            <span class="film-name">{{filmContent.name}}</span>
            <span class="film-score">{{filmContent.grade}}</span>
            <span class="film-score-unit">分</span>
          </div>
          <div class="film-desc">
            {{filmContent.category}} | {{filmContent.runtime}} | {{filmContent.director}} |
            <span
              v-for="(items,index) in filmContent.actors"
              :key="index"
            >{{items.name}}</span>
          </div>
          <img
            data-v-1ed7d58f
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAYCAMAAAD57OxYAAAAZlBMVEVHcEwZGhseHh4aGh8zMzMZGhsZGhwZGhsfHx8ZGhsbGxsZGhsZGxsZGxsZGxsZGxsbGxsaGhsaGh0aGh0ZGhwbGxsZGhweHh4ZGhsaGh0ZGxsZGxsZGxsZGhsZGxsZGxsaGhwZGhtuA7MxAAAAIXRSTlMA6iE5Bda99xD+OOWenXh6VddWV9BxviLpe7x5jeSBgI/e7hU0AAAAeUlEQVQY023PyRqCMAyFUSilA2VGnBX/939JN01QP7O6Z5ObFGt6FjoPuCjuEBeBvYKvRKGG8iQyZ5iCqPFwtKIxQqsre2BQdV8F7rfgoJh2WAe+yWghjjkPQJ/zHKHLufLg8jmmhDp8vGD+LH1BnKU6wU3vXdOm+Q34ngmHHMc+eAAAAABJRU5ErkJggg=="
            width="4px"
            height="8px"
            alt
            class="film-more"
          />
        </div>
        <div class="date-list">
          <div class="tabs-bar-wrapper dateWrap">
            <div class="tabs-bar">
              <ul class="tabs-nav">
                <li
                  style="padding: 0px 15px;"
                  v-for="(dateItem,index) in filmContent.showDate"
                  :key="index"
                >
                  <span v-html="getTime(dateItem)" @click="changeIndex(index)"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="schedule-list">
          <div>
            <div class="schedule-item" v-for="(item,index) in sessionList" :key="index">
              <div class="left">
                <div class="start-at" v-html="getHours(item.showAt)"></div>
                <div class="end-at" v-html="getHours(item.endAt)+'散场'"></div>
              </div>
              <div class="middle">
                <div class="language">原版{{item.imagery}}</div>
                <div class="hall">{{item.hallName}}</div>
              </div>
              <div class="right">
                <div class="buy-ticket">购票</div>
                <div class="lowest-price">
                  <span class="price-icon">￥</span>
                  {{item.salePrice/100}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import { Toast } from "mint-ui";
import {
  getCinemaDetailData,
  getCinemaDetailSecondData,
  getCinemaFilmInfo
} from "@/api";

export default {
  data() {
    return {
      cinemaId: "",
      loading: false,
      obj: {},
      cinemaFilmList: {},
      filmIndex: 0,
      filmContent: {},
      filmId: "",
      dateIndex: 0,
      dateTime: "",
      sessionList: []
    };
  },

  watch: {
    $route: {
      handler(n, o) {
        var id = n.params.id;
        var key = new Date().getTime();
        this.cinemaId = n.params.id;
        this.getCinemaData(id,key);
        this.getCinemaDetailSecondData(this.dateIndex);

      },
      deep: true,
      immediate: true
    }
  },

  methods: {
    getCinemaData(id,key) {
      this.loading = true;
      getCinemaDetailData(id,key).then(res => {
        this.obj = res.data.data;
        this.loading = false;
      });
    },

    getCinemaDetailSecondData(dateIndex) {
      
      var _this = this;
      this.loading = true;
      getCinemaDetailSecondData(this.cinemaId).then(res => {
        // console.log(res)
        this.cinemaFilmList = res.data.data.films;

        this.loading = false;
        this.$nextTick(() => {
          var swiper = new Swiper(".swiper-container", {
            slidesPerView: 3,
            spaceBetween: 30,
            centeredSlides: true,
            loop: false,
            observer: true,
            observeParents: true,
            on: {
              transitionEnd: function() {
                // console.log(dateIndex);
                _this.filmIndex = this.activeIndex;
                _this.filmContent = _this.cinemaFilmList[_this.filmIndex];
                _this.filmId = _this.filmContent.filmId;
                _this.dateTime = _this.filmContent.showDate[_this.dateIndex];
                _this.getCinemaFilmInfo(
                  _this.filmId,
                  _this.cinemaId,
                  _this.dateTime
                );
              }
            }
          });
        });
      });
    },
    getCinemaFilmInfo(filmId, cinemaId, date) {
      this.loading = true;
      getCinemaFilmInfo(filmId, cinemaId, date).then(res => {
        // console.log(res);
        this.sessionList = res.data.data.schedules;
      });
    },
    // 月日
    getTime(time) {
      var date = new Date(time * 1000);
      var day = date.getDate();
      var month = date.getMonth() + 1;
      return month + "月" + day + "日";
    },
    // 拿到时刻
    getHours(time) {
      var date = new Date(time * 1000);
      var hours = date.getHours();
      var minute = date.getMinutes();
      if (minute == 0) {
        minute = minute + "0";
      }
      return hours + ":" + minute;
    },

    changeIndex(index) {
      // console.log(index);
      this.dateIndex = index;
      getCinemaDetailSecondData(this.dateIndex);
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs-bar-wrapper {
  position: relative;
  z-index: 100;
  width: 100%;
  overflow-x: hidden;
  background: #fff;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  .tabs-bar {
    height: 49px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    -webkit-transition: -webkit-transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    transition: -webkit-transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    -o-transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    transition: transform 0.2s cubic-bezier(0.35, 0, 0.25, 1),
      -webkit-transform 0.2s cubic-bezier(0.35, 0, 0.25, 1);
    position: relative;
    .tabs-nav {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      display: -webkit-flex;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      position: relative;
      width: 100%;
      li {
        flex-shrink: 0;
        -webkit-flex-shrink: 0;
        color: #191a1b;
        text-align: center;
        height: 16px;
        line-height: 16px;
        font-size: 14px;
        cursor: pointer;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      }
    }
  }
}
.cinema-schedule {
  overflow: hidden;
  padding-top: 44px;
  background: #fff;
  min-height: 100vh;
  .schedule-wrap {
    position: relative;
    .schedule-list {
      min-height: calc(100vh - 44px);
      .schedule-item {
        height: 74px;
        padding: 15px;
        position: relative;
        background: #fff;
        .left {
          float: left;
          width: 100px;
          .start-at {
            font-size: 15px;
            color: #191a1b;
          }
          .end-at {
            font-size: 13px;
            color: #797d82;
            margin-top: 2px;
          }
        }
        .middle {
          float: left;
          width: calc(100% - 240px);
          .language {
            font-size: 15px;
            color: #191a1b;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .hall {
            font-size: 13px;
            color: #797d82;
            margin-top: 2px;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .right {
          float: right;
          padding: 10px 0;
          line-height: 25px;
          color: #ff5f16;
          .buy-ticket {
            float: right;
            height: 25px;
            width: 50px;
            border-radius: 2px;
            position: relative;
            text-align: center;
          }
          .lowest-price {
            float: right;
            padding-right: 20px;
            font-size: 15px;
            .price-icon {
              font-size: 10px;
            }
          }
        }
      }
    }
    .film-bg {
      position: absolute;
      top: 0;
      height: 160px;
      width: 100%;
      padding: 15px 0;
      overflow: hidden;
      background-color: #ccc;
    }
    .date-list {
      width: 100%;
    }
    .film-info {
      width: 100%;
      background: #fff;
      height: 80px;
      padding: 15px 0;
      position: relative;
      .film-head {
        margin-bottom: 10px;
        text-align: center;
        line-height: 18px;
        .film-name {
          font-size: 15px;
          color: #191a1b;
          padding-right: 5px;
        }
        .film-score {
          font-size: 16px;
          font-style: italic;
          color: #ffb232;
        }
        .film-score-unit {
          font-size: 10px;
          color: #ffb232;
        }
      }
      .film-desc {
        text-align: center;
        height: 18px;
        color: #797d82;
        font-size: 13px;
        padding: 0 12%;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .film-more {
        position: absolute;
        right: 15px;
        top: 0;
        margin-top: 36px;
      }
    }
  }
  .header-left {
    position: fixed;
    top: 0;
    height: 44px;
    line-height: 44px;
    padding-left: 15px;
    z-index: 303;
  }
  .header-title {
    position: relative;
    text-align: center;
    font-size: 17px;
    color: #191a1b;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    padding: 0 15px;
    background: #fff;
    top: 0;
    height: 44px;
    line-height: 44px;
    z-index: 302;
  }
  .cinema-info {
    .tags {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      font-size: 15px;
      color: #ffb232;
      overflow: hidden;
      position: relative;
      padding: 5px 0 15px;
      .tag {
        position: relative;
        padding: 0 6px;
        margin: 0 2.5px;
        font-size: 10px;
      }
    }
    .address {
      height: 50px;
      position: relative;
      display: flex;
      padding-left: 17px;
      align-items: center;
      justify-content: center;
      img {
        width: 14px;
        height: 21px;
      }
      .address-des {
        font-size: 14px;
        height: 20px;
        padding: 0 12px;

        position: relative;
        overflow: hidden;
      }
      .tele {
        height: 18px;
        // padding: 0 25px;
        img {
          width: 17px;
          height: 18px;
        }
      }
    }
  }
}
.cinema-schedule
  .schedule-wrap
  .schedule-list
  .schedule-item
  .right
  .buy-ticket:after {
  content: " ";
  -webkit-transform: scale(0.5);
  -ms-transform: scale(0.5);
  transform: scale(0.5);
  position: absolute;
  border: 1px solid #ff5f16;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  border-radius: 4px;
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  transition: 300ms;
  transform: scale(0.8);
  width: 78px;
  margin-right: 16px;

}
.swiper-slide-active,
.swiper-slide-duplicate-active {
  transform: scale(1);
}
.cinema-schedule .cinema-info .tags .tag:after {
  content: " ";
  -webkit-transform: scale(0.5);
  -ms-transform: scale(0.5);
  transform: scale(0.5);
  position: absolute;
  border: 1px solid #ffb232;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  border-radius: 4px;
  border-radius: 1px;
}
</style>