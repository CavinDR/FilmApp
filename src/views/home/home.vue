<template>
  <div>
    <button @click="pos" id="locationBtn">获取位置</button>

    <MySwiper :list="list" v-if="list.length" />

    <router-view />
  </div>
</template>

<script>
import MySwiper from "@/components/myswiper";
import { getSwiperData } from "@/api";
import location from "@/module/getLocation";

export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    // console.log(1111);
    getSwiperData().then(res => {
      this.list = res.data.data;
    });
  },
  methods: {
    pos() {
      location(city => {
        alert(city);
      });
    }
  },
  components: {
    MySwiper
  }
};
</script>

<style lang="scss">
#locationBtn {
  position: absolute;
  top: 18px;
  left: 7px;
  color: #fff;
  z-index: 10;
  font-size: 13px;
  background: rgba(0, 0, 0, 0.01);
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  padding: 0px 6px 4px 8px;
}
</style>