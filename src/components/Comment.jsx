import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'


export function Comment({content, onDeleteComment}) {
    const [likeCount, setLikeCount] = useState(0)


    function handleDeleteComment() {
        console.log("deletando comentário!")
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/jeffersonf-alves.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                        <strong>Jefferson Alves</strong>

                            <time title='01 de janeiro 2022' dateTime="2022-01-01 13:00:00">Cerca de 1h atrás</time>
                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                <button onClick={handleLikeComment}>
                    <ThumbsUp />
                    Aplaudir <span>{ likeCount }</span>
                </button>
            </footer>

            </div>
        </div>
    )
}