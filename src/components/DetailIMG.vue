<template>
  <div>
    <div class="header" @click="go">
      <span class="iconfont" id="back">&#xe502;</span>
      <div class="photos-title-bar">
            <span>剧照</span>
            <span class="iconfont"><span>(</span>{{obj.photos.length}}<span>)</span></span>
          </div>
    </div>
    <li v-for="(item,index) in obj.photos" :key="index" class="scroll">
      <div>
        <img :src="item" />
      </div>
    </li>
  </div>
</template>

<script>
import { getDetailData } from "@/api";
export default {
  data() {
    return {
      obj: {},
      flag:false
    };
  },

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

  methods: {
    getData(id, key) {
      // console.log(123);
      // console.log(id);

      getDetailData(id, key).then(res => {
        this.obj = res.data.data.film;
        // console.log(res);
      });
    },
    go() {
      this.$router.push("/home");
    }
  },
  // 滚动监听
  // directives: {
  //   scroll:(e,binding)=>{
  //     window.addEventListener('scroll',()=>{
  //       var top = document.documentElement.scroll || document.body.scrollTop
  //       if (top >= Number(e.getAttribute(''))) {
  //         binding.value.toabel = true
  //       }else{
  //         binding.value.toabel = false
  //       }
  //     })

  //   }
    
  // }
  
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 44px;
  transition: all 0.3s ease;
  background-color: #fff;
  color: #191a1b;
  display: flex;
  align-items: center;
  justify-content: center;
  #back {
    height: 30px;
    position: absolute;
    top: -9px;
    left: 0px;
    text-align: center;
    font-size: 40px;
  }

   .photos-title-bar {
    padding: 15px;
    span:nth-child(2) {
      float: right;
    }
  }
  }
</style>