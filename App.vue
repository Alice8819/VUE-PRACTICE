<template>
    <div>
        <data-picker v-model="date" />
    </div>
    
</template>

<script>
import DataPicker from "./DatePicker";

export default {
    components:{
        DataPicker,
    },
    mounted () {
        
    },
    data () {
        return {
            date:new Date(new Date().getTime() + 24*60*60*1000),
        }
    },
}
</script>
<style>  

</style>