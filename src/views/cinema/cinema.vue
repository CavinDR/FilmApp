<template>
  <div>
    <header class="header">
      <div class="left">
        <div class="leftDown">
          <div v-for="item in list" :key="item.cinemaId">
            <div>{{item.cityName}}</div>
            <div class="iconfont icon">&#xe625;</div>
          </div>
        </div>
      </div>

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
// import { getCinemaDetailData } from "@/api";
export default {
  data() {
    return {
      list: []
    };
  },
  // 监控数据变化
  watch: {
    $route: {
      handler(n, o) {
        var id = n.params.id;
        var cityId = JSON.parse(localStorage.getItem("city")).cityId;
        console.log(cityId);
        var key = new Date().getTime();
        this.getCinemaData(cityId, key);
      },
      deep: true,
      immediate: true
    }
  },

  methods: {
    getCinemaData(cityId, key) {
      getCinemaListData(cityId, key).then(res => {
        this.list = res.data.data.cinemas;
        console.log(this.list);
      });
    }
  },
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
    width: 56.75px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    .leftDown {
      width: 37px;
      height: 16px;
      overflow: hidden;

      .icon {
        top: 14px;
        left: 53px;
        position: absolute;
        font-size: 1px;
        color: #797d82;
      }
    }
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
  .left {
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