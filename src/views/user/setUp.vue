<template>
  <div class="main">
    <div class="system-set-view" style="height: 667px;">
      <header class>
        <!---->
        <div class="left" @click="backbut">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAA2CAMAAACRK2tAAAAAkFBMVEVHcEwcHBwZGhsaGhwZHBwqKioZGhv///8bGxs/Pz8ZGhseHh4eHh4cHBwZGxsaGhsZGxsfHx8ZGhwZGhsZGhsdHR0ZGhsZGhsaGhwbGxsZGhsbGxsZGxseHh4ZGxsZGhsaGhskJCQZGxsaGhwZGxsZGhwaGhwZGhwZGhsZHh4fHx8aGhsZGhsZGhsZGhsZGhteFmxMAAAAL3RSTlMAEv1YdgzJAUsE+hkhP5WksQi+0/c08uWGStxnZirs3c0HsoeWo4W91DMp6+T28faGh4gAAADjSURBVDjLxZXZkoJADEUbVxBQlG1AYRZ3Z/T8/9/5gK9JqgZL83puVVd3TjrO/bumfjVVA3PwNf4BVAofAXvliA2QBDIfDuD4LXN/BpOxzOMMUk/meQF1KPOmhb9I5lEJvxeZhzXczjL3UrjGMh9PYKZ0YLmCwVDmQQJsFAEWwEgXgIMhwNwQYNFTgNXyfQK4Lygj1yeQF/CpHeHiDE6elrCuaT+Uc2vgJ3A9mtW1e2f9GGzVP8dSrpN2rSUs7e3B6UYvi7VEWEORa4mohLbREk37HD3Sl+iRPEGPqtdCsVfSo+6AByDPg79r1AAAAABJRU5ErkJggg=="
            width="11px"
            height="18px"
            alt
          />
        </div>
        <!---->
        <div class="title">设置</div>
        <div class="right">
          <div class style="color: rgb(121, 125, 130);"></div>
        </div>
      </header>
      <div class="setting-detail">
        <div style="height: inherit;">
          <div class="item-box">
            <div class="common">
              <span class="label">账号ID</span>
              <span class="text" style="color: rgb(121, 125, 130);">211875856</span>
            </div>
          </div>
          <div class="item-box">
            <div class="common">
              <span class="label">登录密码</span>
              <span class="text" style="color: rgb(121, 125, 130);">修改</span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
                width="7px"
                height="12px"
                alt
              />
            </div>
            <div class="common feedback">
              <span class="label">安全密码</span>
              <span class="text" style="color: rgb(121, 125, 130);">修改</span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
                width="7px"
                height="12px"
                alt
              />
            </div>
          </div>
          <div class="item-box">
            <div class="common">
              <span class="label">软件版本</span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
                width="7px"
                height="12px"
                alt
              />
            </div>
            <div class="common feedback">
              <span class="label">意见反馈</span>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAkCAMAAABR74GsAAAAhFBMVEVHcEy+wMa+wcW9wMXQ0NDFxcW9wMW///+9wMW9wMW+wMW+wse+wMXBwca/wsW9wMW+wMa9wcW9wcW+wMa9wse9wMW9wcbAwMa/xsa9wMXAwMe9wMW9wcW/wca+wca9wMW9wsa+wMa9wMW9wMW9wcW/1NS+wMXHx8e/wcbCws6+wcW9wMXhD+L5AAAAK3RSTlMAgrXLCxblBPz1ZjfcNkzdnraBg2XPyk0k6iXrjXCd5HGLnLeADMwXZBVL0OsnaQAAAJJJREFUKM+t0EcSgzAMQFEDBmx6OiW9J//+98te8iqDlm80428ZM8ccslVATxDgC1AozWNwO8V2C75U/KlgGhX3A7QvxbWH50Px18EtV/wGOp19ByLN1xl+k1aw0doG1Cbga/naAlwjVztgLTEClhIL4CixcRDL65QeEitwnKBKA/VD/3/9PlRvskC9MecsMnPPD3MGEI/gd5ReAAAAAElFTkSuQmCC"
                width="7px"
                height="12px"
                alt
              />
            </div>
          </div>
          <div class="item-box">
            <div class="common">
              <span class="label">清除缓存</span>
              <span class="text">0.1 KB</span>
            </div>
          </div>
          <div class="logout-btn" @click="userout">退出登录</div>
        </div>
        <!---->
      </div>
    </div>
    <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" @select="onSelect" />
    <!---->
  </div>
</template>

<style lang="scss" scoped>
.main {
  height: 100%;
  box-sizing: border-box;

  .system-set-view {
    position: relative;
    left: 0;
    right: 0;
    bottom: 0;
    font-size: 15px;
    background: #f4f4f4;
    padding-top: 54px;

    header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 44px;
      line-height: 44px;
      overflow: hidden;
      margin: 0;
      padding: 0;
      z-index: 3000;
      background-color: #fff;
      display: flex;

      div {
        float: left;
        height: 44px;
      }

      .left {
        min-width: 15%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 15px;
      }

      .title {
        text-align: center;
        font-size: 17px;
        color: #191a1b;
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .right {
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 15px;
      }
    }

    .setting-detail {
      .item-box {
        background: #fff;
        margin-bottom: 10px;
        .common {
          padding: 0 14px 0 15px;
          height: 49px;
          line-height: 49px;
          background: #fff;
          color: #191a1b;
          display: flex;
          align-items: center;

          .label {
            flex: 1;
          }
          .text {
            font-size: 13px;
            color: #bdc0c5;
          }
        }
      }
    }

    .logout-btn {
      position: fixed;
      bottom: 0;
      width: 100%;
      text-align: center;
      color: #ff5f16;
      height: 49px;
      line-height: 49px;
      background: #fff;
    }
  }
}
</style>

<script>
// import Cookies from 'js-cookie'
// import { mapMutations } from 'vuex'
export default {
  //   data () {
  //     return {
  //       show: false,
  //       actions: [
  //         {
  //           name: '退出',
  //           color: '#ff5f16'
  //         },
  //       ]
  //     }
  //   },
  methods: {
    //     ...mapMutations(['settoken', 'setusername', 'setuserimg']),
    //     userout () {
    //       this.show = true
    //     },
    //     onSelect (item) {
    //       // 点击选项时默认不会关闭菜单，可以手动关闭
    //       Cookies.remove('token')
    //       Cookies.remove('username')
    //       Cookies.remove('userimg')
    //       this.settoken('')
    //       this.setusername('')
    //       this.setuserimg('')
    //       this.show = false
    //       this.$router.push('/center')
    //     },
    backbut() {
      this.$router.back(-1);
    }
  }
};
</script>