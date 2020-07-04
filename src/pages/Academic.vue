<template>
    <div class="academic">
        <ul class="quesList" v-if="quesLists">
            <router-link tag="li" :to="{name:'question',params:{id:ques.id}}" v-for="ques in quesLists" :key="ques.id">{{ques.title}}</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data (){
        return {
            quesLists:[],
        }
    },
    mounted (){
        this.getData();
    },
    methods:{
        getData () {
            this.$axios.get('/question').then(res=>{
                this.quesLists = res.data;
            })
        }
    }
}
</script>

<style scoped>
.quesList li{
    cursor: pointer;
    margin:10px 0;
    color:rgb(97, 129, 219);
    text-decoration:underline;
}
</style>