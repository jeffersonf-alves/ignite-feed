import styles from './Post.module.css'


export function Post() {
    return <>
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/61715554?v=4"/>
                    <div className={styles.authorInfo}>
                        <strong>Pedro Junior</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='01 de janeiro 2022' dateTime="2022-01-01 13:00:00">Publicado há 1h</time>
            </header>
            <div>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
            <p>👉 <a href="">jane.design/doctorcare</a></p>
            <p>
                <a href="">#novoprojeto </a>
                <a href="">#nlw </a>
                <a href="">#rocketseat</a>
            </p>
            </div>


        </article>
    </>
}