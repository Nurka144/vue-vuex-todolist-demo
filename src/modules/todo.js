export default {
    actions: {
        async getAllTodos(ctx) {
            const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=3');
            const data = await res.json();

            ctx.commit('updateTodos', data);
        }
    },
    mutations: {
        updateTodos(state, todos) {
            state.todos = todos;
        },
        createTodo(state, newTodo) {
            state.todos.push(newTodo);
        }
    },
    state: {
        todos: [{
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
          },
          {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
          },
          {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
          },
          {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
          }]
    },
    getters: {
        allTodos(state) {
            return state.todos;
        }
    } 
}