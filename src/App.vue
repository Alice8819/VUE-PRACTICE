<template>
  <div id="app" >
    <button @click="show = !show">点击</button>
    <base-demo>
      <div key="world" v-if="show">Hello World</div>
      <div key="alice" v-else>Hello Alice</div>
    </base-demo>
        <!-- <base-demo>
      <div v-if="show">Hello Alice</div>
    </base-demo> -->
  </div>
</template>

<script>
import BaseDemo from './components/BaseDemo1'

export default {
  components: {
    BaseDemo
  },
  data() {
    return {
     show:true,
    };
  },
};
</script>



