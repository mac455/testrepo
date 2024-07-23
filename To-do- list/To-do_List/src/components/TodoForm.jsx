import React, {useState} from 'react'

export default function TodoForm({addTodo, tasks}) {

    const [value, setValue] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(value);
        setValue('')

    };
  return (
    <div className='Task-Container'>
        <h1>What are we doing today?</h1>
        <form className='TodoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' 
            placeholder='What would you like to do' onChange={(e) => setValue(e.target.value)} value={value} />
            <button type='submit' className='todo-btn'> Create Task </button>
            <div className='TaskList'>
            {tasks.length ===0 ? (
                <p>No tasks yet!</p>

            ) : (
                <ul>
                    {tasks.map(task => (
                        <li key={task.id} className="TaskItem">{task.task}</li>

                    ))}
e
                </ul>
            )
        }
        </div>
        </form>
    </div>
    
  )
}
