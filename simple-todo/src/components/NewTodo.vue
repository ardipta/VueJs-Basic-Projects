<template>
  <form @submit.prevent="addTodo()" action="" class="mb-2">
    <input v-model="newTodo" type="text" placeholder="Enter Todo" class="p-2 form-control">
  </form>
</template>

<script>
export default {
    data(){
        return{
            newTodo:""
        }
    },
    methods:{
        addTodo(){
            if(this.newTodo.length > 1){
                this.$emit("on-addtodo", this.newTodo)
            }
            this.newTodo = "";
        }
    }
}
</script>

<style>

</style>