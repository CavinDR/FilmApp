<template>
  <ul
    v-infinite-scroll="loadMore"
    infinite-scroll-disabled="loading"
    infinite-scroll-distance="10"

  >
    <li v-for="item in list" :key="item.filmId" @click="go(item.filmId)">
      <div class="listImg">
        <img :src="item.poster" width="66px" height="97.53px" />
      </div>

      <div class="listRight">
        <div class>
          <span id="titleName">{{item.name}}</span>
          <span class="DD">{{item.filmType.name}}</span>
        </div>

        <div>
          <span>观众评分</span>
          <span id="score">{{item.grade}}</span>
        </div>

        <div>
          <span>主演：</span>
          <span v-for="(item,index) in item.actors" :key="index" id="actor">{{item.name}}</span>
        </div>

        <div>
          <span>{{item.nation}}</span>
          <span>|</span>
          <span>{{item.runtime}}</span>
        </div>
      </div>

      <div class="rightMax">
        <div>
          <span>购票</span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { Toast } from "mint-ui";
import { getMovieList } from "@/api";

import Detail from "@/components/Detail"
export default {
  data() {
    return {
      list: [],
      loading: false,
      type: "",
      page: 1,
      total: 1
    };
  },

  watch: {
    $route: {
      handler(n, o) {
        this.resetList();
        var p = n.params.type;

        if (!p) {
          this.$router.push("/film/nowPlaying");
        }
        this.type = p === "nowPlaying" ? 1 : 2;
        this.getData(this.type, this.page);
      },
      deep: true,
      immediate: true
    }
  },

  methods: {
    loadMore() {
      // console.log("loadMore...");
      this.page++;
      this.getData(this.type, this.page);
    },
    getData(type, page) {
      if (this.list.length >= this.total) {
        Toast({
          message: "没有更多数据了",
          duration: 1000
        });
        return;
      }
      this.loading = true;

      getMovieList(type, page).then(res => {
        this.list = this.list.concat(res.data.data.films);
        this.total = res.data.data.total;
        this.loading = false;
        // console.log(res);
        
      });
    },
    // 重置列表
    resetList() {
      this.page = 1;
      this.loading = false;
      this.list = [];
    },

    go(id) {
      console.log(id);
      
      this.$router.push("/Detail/" + id);
    }
  
  }
};
</script>

<style lang="scss" scoped>
 ul{
  list-style: none;
  padding: 0;
  margin-left: 15px;
  margin-bottom: 0;
  margin-top: 0;
  overflow: hidden;
    li {
    float: left;
    width: 100%;
    padding: 15px 15px 15px 0;

    .listImg {
      float: left;
      width: 66px;
      height: 97.53px;
    }
    .listRight {
      width: 229px;
      height: 114px;
      // background-color: rebeccapurple;
      float: left;
      #titleName {
        width: 10px;
        color: #191a1b;
        font-size: 16px;
      }
      .DD {
        font-size: 9px;
        color: #fff;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
      }
      div {
        height: 19px;
        padding-left: 11px;
        overflow: hidden;
        margin-top: 6px;
        span {
          font-size: 13px;
          color: #797d82;
          margin-right: 3px;
          overflow: hidden;
        }
        #actor {
          display: inline-block;
        }
        #score {
          color: #ffb232;
          font-size: 14px;
        }
      }
    }
    .rightMax {
      overflow: hidden;
      float: left;
      div {
        width: 50px;
        height: 25px;
        border: 1px solid #ff5f16;
        border-radius: 2px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        float: left;
        margin-top: 31px;
        span {
          line-height: 25px;
          height: 25px;
          width: 50px;
          color: #ff5f16;
          font-size: 13px;
          text-align: center;
        }
      }
    }
  }
 }

</style>