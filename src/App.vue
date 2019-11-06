<template>
  <div id="app">
    <router-view/>
     <Bus v-if="flag" />
  </div>
</template>
<script>
import Bus from '@/components/bus'
export default {
  data() { 
    return {
      flag:true
    }
  },
   watch:{
      $route:{
        handler(n,o){
          this.flag=n.meta.flag
        },
        deep:true,
        immediate:true
      }
   },
   components:{
      Bus
   }
  
}
</script>
<style>
@import "~@/assets/reset.css";
@import "~@/assets/animate.css";

</style>
