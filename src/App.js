import React from 'react';
import Input from "./components/Input";
import {useSelector} from 'react-redux'
import {selectTodoList} from './features/TodoSlice'
import './App.css';
import TodoItem from "./components/TodoItem";

function App() {
    const todoList = useSelector(selectTodoList)
    return (
        <div className="app">
            <div className="app__container">
                <div className="app__todoContainer">
                    { todoList.map(todo => (
                        <TodoItem
                            key={todo.id}
                            name={todo.item}
                            done={todo.done}
                            id={todo.id}
                        />
                    )) }
                </div>
                <Input/>
            </div>
        </div>
    );
}

export default App;
