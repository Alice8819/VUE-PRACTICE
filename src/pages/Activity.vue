<template>
  <div class="activity">
    <div class="header">
      <router-link :to="{name:'academic'}">学术讨论</router-link>
      <router-link :to="{name:'personal'}">个人中心</router-link>
      <router-link to="/activity/download">下载</router-link>
    </div>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>

.header a{
    margin:0 10px;
    padding:0 5px;
    border-radius:3px;
    cursor: pointer;
    color:#000;
}
a.a-exact-active{
    background:blue;
    color:#fff;
}
.content{
    padding:20px 15px;
}
</style>