<template>
  <div>
    <div class="op">
      <ul class="banner2">
        <li>
          <router-link to="/film/nowPlaying" id="route">正在热映</router-link>
        </li>
        <li>
          <router-link to="/film/comingSoon" id="route">即将上映</router-link>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>


<script>
export default {};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}
.op {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
.banner2 {
  width: 375px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: white;
}
// #route{

//     color: #191a1b;

// }
</style>