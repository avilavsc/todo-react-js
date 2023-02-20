import styles from './Task.module.css'
import trash from '../assets/trash.svg'
import { Trash } from 'phosphor-react'

export function Task({
  content,
  isComplete,
  onCompleteTask,
  onDeleteTask
}) {

  function handleCompleteTask() {
    onCompleteTask(content)
  }

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskBody}>
        <div>
          <input 
            type="checkbox"
            className={styles.taskCheckbox}
            onChange={handleCompleteTask}
          />
        </div>
        <p className={isComplete ? styles.completed : styles.content}>
          {content}
        </p>
      </div>
      <button
        className={styles.trashButton}
        onClick={handleDeleteTask} 
        alt="Apagar" >
        <Trash size={24} />
      </button>
    </div>
  )
}