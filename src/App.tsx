import React from 'react';
import './App.css';
import {TaskType, Todolist} from "./components/Todolist";

function App() {

    let tasks1: Array<TaskType> = [
        {
            id: 1, title: "CSS-HTML", isDone: true
        },
        {
            id: 2, title: "JS", isDone: true
        },
        {
            id: 3, title: "React", isDone: false
        }
    ];

    let tasks2: Array<TaskType> = [
        {
            id: 1, title: "item1", isDone: true
        },
        {
            id: 2, title: "item2", isDone: true
        },
        {
            id: 3, title: "item3", isDone: false
        }
    ]

    return (
        <div className="App">
            <Todolist title={"List"} tasks={tasks1}/>
            <Todolist title={"List"} tasks={tasks2}/>
        </div>
    );
}

export default App;
