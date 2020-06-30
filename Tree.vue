<template>
  <ul class="tree-list">
    <li v-for="tree in data" :key="tree.label" @click.stop="handleClickTree(tree)" class="tree">
      <i class="tree-icon iconfont " v-if="tree.children" :class="{'iconfont-down':!tree.boolean ,'iconfont-right':tree.boolean }"></i>
      <span class="tree-cont">{{tree.label}}</span>
      <tree-self :data="tree.children" v-if="tree.children && tree.boolean" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "tree-self",
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  components: {},
  data() {
    return {
      showArr: []
    };
  },
  mounted() {},
  methods: {
    handleClickTree(tree) {
        if (!tree.boolean) {
          this.$set(tree, "boolean", true);
        } else {
          const res = !tree.boolean;
          this.$set(tree, "boolean", res);
        }
    }
  }
}
</script>

<style scoped>
@import "./assets/font.css";

ul {
  list-style: none;
}
i {
  font-style: normal;
  color: rgb(173, 172, 172);
  font-size:12px;
}
.tree .tree-cont {
  margin-left: 10px;
}

.tree {
  margin: 10px 0;
  cursor: pointer;
}
</style>