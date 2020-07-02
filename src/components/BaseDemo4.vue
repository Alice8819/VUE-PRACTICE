<template>
  <div class="demo">
    <button @click="handleClick">点击</button>
    <transition mode="in-out">
      <div :key="keyName" class="box">hello {{keyName}}</div>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      keyName: "Alice"
    };
  },
  methods: {
    handleClick() {
      const isAlice = this.keyName === "Alice";
      this.keyName = isAlice ? "Wang" : "Alice";
    }
  }
};
</script>

<style scoped>
.v-enter {
  opacity: 0;
  transform: translateX(80px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
.v-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.v-leave {
  opacity: 1;
  transform: translateX(0);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-80px);
}
.demo {
  margin-left: 100px;
}
.box {
  width: 150px;
  height: 30px;
  background: gray;
  color: #fff;
  line-height: 30px;
  text-align: center;
  margin-top: 10px;
  margin-left: 20px;
  display: inline-block;
  position: absolute;
}
button {
  display: block;
}
</style>
