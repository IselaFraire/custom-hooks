import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

//Inicializar nuestro reducer
const init = () => {
    return JSON.parse(localStorage.getItem('todos') || []);
}

export const useTodo = () => {
    
    const initialState = [
        // {
        //     id: new Date().getTime(),
        //     description: 'Recolectar la piedra del alma',
        //     done: false
        // },
       
    ];
    

    const [todos, dispatch] = useReducer( todoReducer, [], init);

      //Almacenar en memoria navegador
      useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        });
    }
  
    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }
}
