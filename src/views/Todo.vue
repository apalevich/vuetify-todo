<template>
<div class="home">
  <v-text-field
    class="pa-3"
    outlined
    label="Add todo"
    append-icon="mdi-plus"
    hide-details
    v-model="newTodoTitle"
    @click:append="addTodo()"
    @keyup.enter="addTodo()"
  ></v-text-field>
  <v-list
      flat
      class="pt-0"
    >
      <div
          v-for="todo in allTodos"
          :key="todo.id"
      >
        <v-list-item
          @click="doneTodo(todo.id)"
          :class="{ 'blue lighten-5': todo.completed }"
        >
          <template>
            <v-list-item-action>
              <v-checkbox
                :input-value="todo.completed"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': todo.completed }"
              >
                {{ todo.title }}
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                icon
                @click.stop="deleteTodo(todo.id)"
              >
                <v-icon color="secondary lighten-1">mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>

          </template>
        </v-list-item>
        <v-divider></v-divider>
      </div>
    </v-list>
</div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';

  export default {
    name: 'Todo', 
    data() {
      return {
        newTodoTitle: ''
      }
    },
    methods: {
      ...mapActions(['fetchTodos', 'pushTodo', 'deleteTodo']),
      addTodo() {
        this.pushTodo(this.newTodoTitle)
        this.newTodoTitle = '';
      },
      doneTodo(id) {
        //
      },
    },
    computed: mapGetters(['allTodos']),
    created() {
      this.fetchTodos();
    }
  }
</script>
