<template>
  <div class="demo">
    <button @click="addLists">添加</button>
    <button @click="removeLists">移除</button>
    <button @click="resortLists">洗牌</button>
      <transition-group tag="ul">
        <!-- <ul> -->
        <li v-for="num in lists" :key="num">{{num}}</li>
        <!-- </ul> -->
      </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      lists: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      number: 11
    };
  },
    methods: {
      addLists() {
        const ranIndex = Math.random() * this.lists.length;  // 随机索引
        this.lists.splice(ranIndex, 0, this.number);  // 数组添加
        this.number++;
      },
      removeLists() {
        const ranIndex = Math.random() * this.lists.length; // 随机索引
        this.lists.splice(ranIndex, 1);   // 数组删除
      },
      resortLists() {
        this.lists.sort(() => {    // 洗牌
          return Math.random() - 0.5;
        });
      }
    }
};
</script>

<style scoped>
.v-enter {
  opacity: 0;
  transform: translateY(30px);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.v-leave {
  opacity: 1;
  transform: translateY(0);
}
.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
li {
  display: inline-block;
  margin: 0 5px;
}

.v-move {
  transition:transform .3s
}
ul{
  padding:0;
  /* margin:0; */
}
</style>
