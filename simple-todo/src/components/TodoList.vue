<template>
    <div class="container">
        <div class="col-12 col-lg-6 m-auto">
            <h1 class="display-3">Simple Todo</h1>
            <AddTodo @on-addtodo="addTodo($event)"/>
            <div class="list group">
                <Todo v-for="(todo, index) in todos" 
                    :key="index"
                    :todoString="todo.todoString"
                    :completed="todo.completed"
                    @on-delete="deleteTodo(todo)"
                    @on-toggle="toggleTodo(todo)"
                    @on-edit="editTodo(todo, $event)"
                />
            </div>
        </div>
    </div>
    
</template>

<script>
import Todo from "./Todo.vue"
import AddTodo from "./NewTodo.vue"
export default {
    components: {
        Todo, 
        AddTodo
    },
    data(){
        return{
            todos:[
                {todoString: "Make VueJs Course", completed: false},
                {todoString: "Make Angular Course", completed: false},
                {todoString: "Make React Course", completed: true},
            ]
        }
    },
    methods:{
        addTodo(newTodo){
            this.todos.push({
                todoString: newTodo,
                completed: false
            })
        },
        toggleTodo(todo){
            todo.completed = !todo.completed;
        },
        editTodo(todo, newTodoString){
            todo.todoString = newTodoString;
        },
        deleteTodo(deleteTodo){
            this.todos = this.todos.filter(
                todo=> todo !== deleteTodo
            );
        },
    }
}
</script>

