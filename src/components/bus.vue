<template>
  <ul class="footbar">
    <li>
      <router-link to="/film" id="homie">
       <p class="iconfont" id="homepage">&#xe6af;</p>电影
      </router-link>
    </li>
    <li>
      <router-link to="/cinema" id="homie">
       <p class="iconfont" id="homepage">&#xe8c0;</p>影院
      </router-link>
    </li>
    <li>
      <router-link to="/news" id="homie">
       <p class="iconfont" id="homepage">&#xe65f;</p>资讯
      </router-link>
    </li>
    <li>
      <router-link to="/user" id="homie">
       <p class="iconfont" id="homepage">&#xe636;</p>我的
      </router-link>
    </li>
  </ul>
</template>

<script>
import { getMovieList } from "@/api";
export default {
  created() {
    getMovieList().then(res => {
      console.log(res);
      // this.list = res.data.data.films
    });
  }
};
</script>

<style lang="scss" scoped>


* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.router-link-active {
  color: red;
}
.footbar {
 position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 49px;
  justify-content: space-around;
  align-items: center;
  background: white;
}
#homie {
  width: 93.75px;
  height: 49px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  // color: #9a9a9a;
  font-size: 10px;
  font-weight: 700;
}
#homepage {
  position: absolute;
  bottom: 14px;
  font-size: 25px;
}

</style>