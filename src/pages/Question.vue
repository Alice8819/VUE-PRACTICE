<template>
  <div class="question">
    <div class="title">{{data.title}}</div>
    <div class="others">
      <div
        v-for="ques in otherQuesList"
        :key="ques.type"
        :class="ques.type"
        @click="handleClick(ques.id)"
        :title="ques.title"
      >{{ques.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      id:{
          type:[String,Number],
      },
      name:{
          type:String,
          default:'question',
      }
  },
  data() {
    return {
      data: {}
    };
  },
  mounted() {
  },
  computed: {
    otherQuesList() {
      const arr = [];
      if (this.data.prev) {
        const { prev, prevId } = this.data;
        arr.push({
          type: "prev",
          title: prev,
          id: prevId
        });
      }

      if (this.data.next) {
        const { next, nextId } = this.data;
        arr.push({
          type: "next",
          title: next,
          id: nextId
        });
      }

      return arr;
    }
  },
  watch:{
      '$route':{
          handler(e){
              this.getData();
          },
          immediate:true,
      }
  },
  methods: {
    getData() {
    //   const { id } = this.$route.params;
      const { id } = this;
      this.$axios.get(`/question/${id}`).then(res => {
        this.data = res.data;
      });
    },
    handleClick(id) {
    //   const { name } = this.$route;
    console.log(this.data);
      const { name } = this;
      this.$router.push({
        name,
        params: { id }
      });
    }
  }
};
</script>

<style scoped>
.others {
  color: rgb(77, 133, 206);
  background: pink;
  margin: 260px 0;
  width: 100%;
}
.others .next,
.others .prev {
  float: right;
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}
.others .prev {
  float: left;
}
</style>