import './global.css'
import { Header } from './components/Header'
import styles from './App.module.css'
import plus from './assets/plus.svg'
import { Empty } from './components/Empty'
import { Task } from './components/Task'
import { useState } from 'react'

export function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState({content:'', isComplete: false})

  const numberOfTasks = tasks.length
  const completedTasks = tasks.filter(task => task.isComplete).length

  function handleCreateTask(event) {
    event.preventDefault()
    setTasks([...tasks, newTask])
    setNewTask({content:'', isComplete: false})
  }

  function handleNewTask(event) {
    const taskContent = {
      content: event.target.value,
      isComplete: false
    }
    setNewTask(taskContent)
  }

  function completeTask(content) {
    const updatedTasks = tasks.map(task => {
      if(task.content === content)
        task.isComplete = !task.isComplete
      return task
    })
    setTasks(updatedTasks)
  }

  function deleteTask(content) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task.content !== content
    })
    setTasks(tasksWithoutDeletedOne)
  }

  return (
    <div>
      <Header />

      <main className={styles.container} onSubmit={handleCreateTask}>
        <form className={styles.newTaskForm}>
          <input
            onChange={handleNewTask} 
            type="text"
            placeholder='Adicione uma nova tarefa'  
            value={newTask.content}
          />
          <button type="submit">
            Criar
            <img src={plus} />
          </button>
        </form>

        <div className={styles.info}>
          <div className={styles.createdTasks}>
            Tarefas criadas
            <span className={styles.counter}>
              {numberOfTasks}
            </span>
          </div>
          <div className={styles.completedTasks}>
            Concluídas
            <span className={styles.counter}>
              {
                numberOfTasks ? 
                `${completedTasks} de ${numberOfTasks}` :
                `${numberOfTasks}`
              }
            </span>
          </div>
        </div>
        
        {
          (tasks.length === 0) ? <Empty /> : 
          tasks.map(task => 
            <Task 
              key={task.content}
              content={task.content}
              isComplete={task.isComplete}
              onCompleteTask={completeTask}
              onDeleteTask={deleteTask}
            />)
        }

      </main>
    </div>
  )
}
