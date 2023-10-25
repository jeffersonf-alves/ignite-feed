import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'


export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/jeffersonf-alves.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                        <strong>Jefferson Alves</strong>

                            <time title='01 de janeiro 2022' dateTime="2022-01-01 13:00:00">Cerca de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20}/>
                        </button>
                    </header>

                    <p>Muito Bomm Jeff, parábens!</p>
                </div>

            </div>

            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>20</span>
                </button>
            </footer>
        </div>
    )
}