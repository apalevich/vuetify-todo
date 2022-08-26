 import axios from 'axios';

 const state = {
    todos: [
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
    ],
 };

 const getters = {
    allTodos: state => state.todos
 };

 const actions = {};

 const mutations = {};

 export default {
    state,
    getters,
    actions,
    mutations
 };