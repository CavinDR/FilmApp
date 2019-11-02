<template>
  <ul class="footbar">
    <li>
      <router-link to="/film" id="route">电影</router-link>
    </li>
    <li>
      <router-link to="/cinema" id="route">影院</router-link>
    </li>
    <li>
      <router-link to="/news" id="route">资讯</router-link>
    </li>
    <li>
      <router-link to="/user" id="route">我的</router-link>
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

<style>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
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
/* #route{
  color: #191a1b;
    cursor: pointer;
} */
</style>