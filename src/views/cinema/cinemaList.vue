<template>
  <div>
    <div id="out">
      <ul v-for="item in list" :key="item.cinemaId" >

        <li @click="goDetail(item.cinemaId)">
          <div class="cinema-info-lf">
            <span class="cinema-name">{{item.name}}</span>
            <div>
              <span class="cinema-address">{{item.address}}</span>
            </div>
          </div>

          <div class="cinema-info-rt">
            <div>
              <span class="cinema-lowPrice">￥{{item.lowPrice/100}}</span>
              <span class="upon">起</span>
            </div>
            <span class="cinema-gpsAddress">距离未知</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getCinemaListData } from "@/api";
// import { Toast } from "mint-ui";
export default {
  data() {
    return {
      list: [],
      loading: false,
    
    };
  },
  // 监控数据变化
  watch: {
    $route: {
      handler(n, o) {
        var id = n.params.id;
        var cityId = JSON.parse(localStorage.getItem("city")).cityId;
        // console.log(cityId);
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
        // console.log(this.list);
      });
    },
    
    goDetail(cityId){
       this.$router.push("/cinemaDetail/" + cityId);
    }
  }
};
</script>

<style lang="scss" scoped>
#out {
  padding-top: 88px;
}
ul {
  width: 100%;
  height: 100%;
  li {
    width: 100%;
    height: 75px;

    background-color: #fff;
    padding: 15px;
    .cinema-info-lf {
      width: 280px;
      height: 45px;
      text-align: left;
      padding-right: 15px;
      float: left;
      .cinema-name {
        width: 100%;
        height: 22px;
        color: #191a1b;
        font-size: 15px;
        float: left;
      }
      div {
        width: 212px;
        height: 18px;
        overflow: hidden;
        .cinema-address {
          width: 212px;
          height: 18px;
          color: #797d82;
          font-size: 12px;
          margin-top: 5px;
          overflow: hidden;
        }
      }
    }

    .cinema-info-rt {
      width: 70px;
      text-align: center;
      float: right;
      margin-right: -5px;
      div {
        .cinema-lowPrice {
          font-size: 15px;
          color: #ff5f16;
          height: 0 !important;
          display: inline-table !important;
        }
        .upon {
          color: #ff5f16;
          font-size: 10px;
          margin-left: 4px;
        }
      }
      .cinema-gpsAddress {
        display: block;
        font-size: 11px;
        color: #797d82;
        margin-top: 5px;
        text-align: center;
      }
    }
  }
}
</style>