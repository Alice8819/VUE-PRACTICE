<template>
  <div id="app">
    <div class="header">
      <div class="inner">
        <div class="logo" @click="handleClick">渡一教育</div>
        <div class="links">
          <router-link to="/home">首页</router-link>
          <router-link to="/learn">课程学习</router-link>
          <router-link to="/student">学员展示</router-link>
          <router-link to="/about">关于</router-link>
          <router-link to="/activity">社区</router-link>
        </div>
      </div>
    </div>
    <div class="content">
      <router-view></router-view>
      <router-view name="student"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      show: true
    };
  },
  methods:{
    handleClick () {
      this.$router.push('/home')
    }
  }
};
</script>

<style scoped>
@import "./assets/reset.css";

#app{
  width:100%;
}
.header {
  height: 60px;
  line-height: 60px;
  background: blue;
  color: #fff;
  width:100%;
}
.inner {
  width: 80%;
  margin:auto;
  display: flex;
  justify-content: space-between;
}
.header .links {
  width: 300px;
  display: flex;
  justify-content: space-between;

}
.links a {
  color: #fff;
  /* cursor: pointer; */
}
.content {
  width:80%;
  margin:auto;
  padding:30px 0;
}
.a-active{
  font-weight:900;
}
.log {
  cursor:pointer;
}
</style>


