<template>
  <div id="app">
    <transition mode="out-in">
      <router-view class="main"></router-view>
    </transition>
    <nav class="nav">
      <ul>
        <li>
          <router-link to="home">
            <span></span>
            <span>首页</span>
          </router-link>
        </li>
        <li>
          <router-link to="sortment">
            <span></span>
            <span>分类</span>
          </router-link>
        </li>
        <li>
          <router-link to="shopcar">
            <span></span>
            <span>购物车{{count}}</span>
          </router-link>
        </li>
        <li>
          <router-link to="my">
            <span></span>
            <span>我的</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
      count:function () {
          return this.$store.state.goods_info.length
      }
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.v-leave{
      transform:translate3d(0,0,0)
    }
.v-leave-to{
  transform:translate3d(-100%,0,0)
}
    .v-enter-active,.v-leave-active{
        transition:transform ease 0.3s;
    }

.v-enter{
  transform:translate3d(100%,0,0)
} 
.v-enter-to{
    transform:translate3d(0,0,0)   
}   

   
    
  

.main{
  flex: auto;
  overflow:auto;
}
.nav{
  height: 44px;
  flex: none;
  ul{
    width: 100%;height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li{
    flex: auto;
    color: #333;
  }
  .router-link-active{
    color: red;
  }
}
</style>
