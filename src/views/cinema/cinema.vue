<template>
  <div>
    <header class="header">
      <div class="iconfont left">广州&#xe625;</div>

      <div class="title">
        <div>影院</div>
      </div>

      <div class="iconfont right">&#xe61f;</div>
    </header>

    <div class="cinema-list-tag">
         <div class="iconfont left">全城&#xe625;</div>
          <div class="iconfont left">APP订票&#xe625;</div>
           <div class="iconfont left">最近去过&#xe625;</div>
    </div>

    <CinemaList></CinemaList>
  </div>
</template>

<script>
import CinemaList from "@/views/cinema/cinemaList.vue";
import { getCinemaListData } from "@/api";
export default {
  components: {
    CinemaList
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 44px;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  z-index: 3000;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .left {
    font-size: 13px;
  }
  .right {
    font-size: 21px;
  }
  .title {
    width: 232.5px;
    height: 44px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    div {
      // height: 100%;
      text-align: center;
      font-size: 18px;
    }
  }
}

.cinema-list-tag {
  position: fixed;
  height: 50px;
  width: 100%;
  top: 44px;
  right: 0;
  text-align: center;
  background-color: #fff;
  z-index: 2000;
  .left{
      width: 124.88px;
      height: 49px;
      float: left;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #191a1b;
  }
}
</style>