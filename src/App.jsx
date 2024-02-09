import { useEffect, useState } from 'react'
import './App.css'
import { ToDoContextProvider } from './context';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);
  console.log("todos are",todos);

  const addTodo =(todo)=>{
    console.log("todo that come add is ", todo);
    setTodos((prev)=>[...prev, {id:Date.now(), ...todo}]);
  }

  const updateTodo = (id,todo)=>{
    setTodos((prev)=>prev.map((prevtodo)=>(prevtodo.id===id ? todo : prevtodo)));
  }

  const deleteTodo = (id)=>{
    setTodos((prev)=>prev.filter((prevtodo)=>(prevtodo.id !== id)));
  }

  const toggleComplete = (id)=>{
    setTodos((prev)=>prev.map((prevtodo)=>prevtodo.id === id ?{...prevtodo, isCompleted: !prevtodo.isCompleted}: prevtodo));
  }

  useEffect(()=>{
    const todo = JSON.parse(localStorage.getItem("todos"));
    if(todo && todo.length>0){
      setTodos(todo);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  return (
    <ToDoContextProvider value={{todos, addTodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                      <TodoForm></TodoForm>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo)=>(
                          <div key={todo.id}>
                              <TodoItem todo={todo}></TodoItem>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </ ToDoContextProvider>
  )
}

export default App
