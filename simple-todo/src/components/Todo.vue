<template>
    <li class="d-flex align-items-center list-group-item">
        <button 
        v-if="!isEditing"
        :class="{completed}"
        @click="$emit('on-toggle')"
        class="form-control btn text-left flex-grow-1">{{ todoString }}</button>
        <form v-else @submit.prevent="endEditing()" class="flex-grow-1 w-100">
            <input @blur="startEditing()" v-model="newTodoString" type="text" class="form-control">
        </form>
        <button @click="startEditing()" class="btn btn-outline-success ml-2"><i class="fa fa-edit"></i></button>
        <button @click="$emit('on-delete')" class="btn btn-outline-danger ml-2"><i class="fa fa-trash-alt"></i></button>
    </li>
</template>

<script>
export default {
    props:{
        todoString: String,
        completed: Boolean
    },
    data(){
        return{
            isEditing: false,
            newTodoString: ""
        }
    },
    methods:{
        startEditing(){
            if(!this.isEditing){
                this.newTodoString = this.todoString;
                this.isEditing = true;
            }else{
                this.endEditing();
            }
        },
        endEditing(){
            this.isEditing = false;
            this.$emit('on-edit', this.newTodoString)  
        }
    }
}
</script>

<style scoped>
    .completed{
        text-decoration: line-through;
    }
</style>>