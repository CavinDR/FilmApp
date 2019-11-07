<template>
    <div>
        <div class="header"></div>
        <ul>
            <li v-for="(item,index) in list" :key="item.name" @click="go(item)">
                <h3 v-if="index===0 || index!==0 && item.letter !==list[index-1].letter "  @click="go">{{item.name}}</h3>
                <span>{{item.name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
import { getCityData } from "@/api";
export default {
    
    data() {
        return {
            list:[]
        }
    },

    created() {
        getCityData().then((res)=>{
        
            this.list = res.data.data.cities.sort((a,b)=>a.pinyin.localeCompare(b.pinyin)).map((item)=>{
                return {
                    "letter":item.pinyin[0].toUpperCase(),
                    "name":item.name,
                    "cityId":item.cityId
                }
            })
            // console.log(this.list);
        })
    },

    methods: {
        go(item){
            var city = JSON.stringify(item)
             localStorage.setItem("city",city)
            this.$router.push("/film/nowPlaying")
        }
    },

}
</script>

<style lang="scss">
    
</style>