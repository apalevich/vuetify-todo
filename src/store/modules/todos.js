 import axios from 'axios';

 const state = {
    todos: [],
 };

 const getters = {
    allTodos: state => state.todos
 };

 const actions = {
    async fetchTodos({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5');

        commit('setTodos', response.data)
    },
    async pushTodo({ commit }, title) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
            title,
            completed: false
        });

        commit('newTodo', response.data);
    },
    async updateTodo({ commit }, todo) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo);

            console.log(response.data)
        commit('updTodo', response.data)
    },
    async deleteTodo({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);

        commit('removeTodo', id);
    }
 };

 const mutations = {
    setTodos: (state, todos) => {state.todos = todos},
    newTodo: (state, todo) => state.todos.unshift(todo),
    updTodo: (state, todo) => {
        const idx = state.todos.findIndex(item => item.id === todo.id);
        
        if (idx > -1) {
            state.todos.splice(idx, 1, todo);
        }
    },
    removeTodo: (state, id) => state.todos = state.todos.filter(todo => todo.id !== id)
 };

 export default {
    state,
    getters,
    actions,
    mutations
 };