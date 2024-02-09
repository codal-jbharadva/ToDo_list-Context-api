import { useState } from "react";
import { useToDO } from "../context/TodoContext";

function TodoForm() {
    const [todo,setTOdo] =useState("");
    const {addTodo}= useToDO();

    function SubmitFunction(e){
        e.preventDefault();
        console.log("todo is",todo)
        if(!todo) return;
        addTodo({title: todo, isCompleted: false})
        setTOdo("");
    }

    return (
        <form onSubmit={SubmitFunction} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e)=>setTOdo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

