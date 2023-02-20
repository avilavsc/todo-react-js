import clipboard from '../assets/clipboard.svg'
import styles from './Empty.module.css'

export function Empty() {
  return (
    <div className={styles.empty}>
      <img src={clipboard} />
      <div className={styles.text}>
        <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  )
}