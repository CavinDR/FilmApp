<template>
  <div>
       
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in list" :key="item.bannerId">
                        <img :src="item.imgUrl" />

                </div>
                
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            
           
</div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import "swiper/css/swiper.css";
export default {
        props:["list"],
        mounted(){
                 var mySwiper = new Swiper ('.swiper-container', {
                       autoplay: {
                            delay: 3000,
                         
                            disableOnInteraction: false,
                         },
                        loop: true, // 循环模式选项
                        
                        // 如果需要分页器
                        pagination: {
                         el: '.swiper-pagination',
                        }
                        
                        
                 })        
        }
}
</script>

<style>
    img{
        max-width: 100%;
    }
</style>