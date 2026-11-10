import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import "../todolist.css"

export const TodoApp = () => {
    const dateOptions = {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    }
    const currentDate = new Date().toLocaleDateString(undefined, dateOptions);
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")
    const [editTask, setEditTask] = useState(null)

    function edit(index) {
        setInput(tasks[index]);
        setEditTask(index)
    }

    function removeTask(index) {
        setTasks(tasks.filter((_, i) => i !== index))
    }

    function addToTask() {
        if (input.trim() === "") return;

        if (editTask !== null) {
            setTasks(tasks.map((task, index) =>
                index === editTask ? input : task
            ));
            setEditTask(null);
        } else {
            setTasks([...tasks, input]);
        }
        setInput("");
    }


    return (
        <div className="list-body">
            <div><h1 className="text-3xl text-amber-800">To-Do</h1></div>
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>{currentDate}</div>
            <div><input type="text" placeholder="Add a new task..." value={input} id="list" onChange={(e) => setInput(e.target.value)} />
                <span className="material-symbols-outlined button" onClick={addToTask}>
                    add_circle
                </span>
            </div>

            <div>
                <ul className="list-task">
                    {
                        tasks.map((task, index) => (
                            <li key={index}>{task}
                                <button onClick={() => edit(index)}>Edit</button>
                                <button onClick={() => removeTask(index)}>Remove</button></li>
                        ))
                    }
                </ul>
            </div>

        </div>
    )
}