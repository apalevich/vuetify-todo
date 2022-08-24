<template>
<div class="home">
  <v-list
      flat
      class="pt-0"
    >
      <div
          v-for="task in tasks"
          :key="task.id"
      >
        <v-list-item
          @click="doneTask(task.id)"
          :class="{ 'blue lighten-5': task.done }"
        >
          <template>
            <v-list-item-action>
              <v-checkbox
                :input-value="task.done"
                color="primary"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{ 'text-decoration-line-through': task.done }"
              >
                {{ task.title }}
              </v-list-item-title>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                icon
                @click.stop="deleteTask(task.id)"
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
  export default {
    name: 'Todo', 
    data() {
      return {
        tasks: [
          {
            id: 1,
            title: 'Wake up',
            done: false,
          },
          {
            id: 2,
            title: 'Get bananas',
            done: false,
          },
          {
            id: 3,
            title: 'Eat bananas',
            done: false,
          },
        ]
      }
    },
    methods: {
      doneTask(id) {
        const task = this.tasks.filter(task => task.id === id)[0]; // better support than .find()
        task.done = !task.done;
      },
      deleteTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
      }
    }
  }
</script>
