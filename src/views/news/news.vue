<template>
    <div v-html="list.content">{{list.content}}</div>
</template>

<script>
import {getDataNew} from "@/api";
export default {
    data(){
        return{
            list:{}
        }
    },
    created(){
        getDataNew().then((res)=>{
          this.list= res.data.data.data
        })
    }
}
</script>
    
<style>

</style>