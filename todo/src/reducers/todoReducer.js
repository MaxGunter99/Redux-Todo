import { ADD_TODO, TOGGLE_COMPLETE } from '../actions';

const initialState = {
    todos: [
        {
            name: 'Eat',
            completed: true
        },
        {
            name: 'Sleep',
            completed: false
        }
    ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
        return {
            ...state,
            todos: [...state.todos, {
                name: action.payload,
                completed: false
            }]
        }

    case TOGGLE_COMPLETE:
        return {
            ...state,
            todos: state.todos.map((todo, index) => {
            if (index === action.payload)
                return {...todo, completed: !todo.completed}
                return todo;
            })
        }
        default:
        return state;
    }
}

export default reducer;