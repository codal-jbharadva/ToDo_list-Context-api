import React, {createContext} from "react";
import { useContext } from "react";

export const toDoContext = createContext({
    todos:[
        {
            id : 1,
            title : "Learn React",
            isCompleted: false,

        }
    ],
   addTodo : (todo)=>{},
   updateTodo: (is,todo) =>{},
   deleteTodo: (id)=>{},
   toggleComplete: (id)=>{}
});

export const ToDoContextProvider = toDoContext.Provider

export function useToDO(){
    return useContext(toDoContext);
}

