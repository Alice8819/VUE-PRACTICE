<template>
  <div class="demo">
    <button @click="show = !show">点击</button>
    <transition
    enter-active-class="animate__animated animate__backInRight"
    leave-active-class="animate__animated animate__backOutDown"
    >
      <div v-if="show" class="box">Hello World</div>
    </transition>
  </div>
</template>
<script>

export default {
  data() {
    return {
      show: true
    };
  }
};
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  line-height: 100px;
  border: 1px solid red;
  color: red;
  text-align: center;
  margin-top: 15px;
}

/* .animate__bounce{
    animation:animatename 1s;
} */
/* .box1-leave-active{
    animation:animatename 1s reverse;
} */

/* @keyframes animatename {
    0%{
        opacity: 0;
        transform:translateX(400px) scale(1);
    }
    50%{
        opacity: 1;
        transform:translateX(200px) scale(2);
    }
    100%{
        opacity: 0.5;
        transform:translateX(0) scale(1)
    }
} */

</style>
