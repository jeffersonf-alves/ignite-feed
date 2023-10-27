import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from "phosphor-react";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1429152937938-07b5f2828cdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"/>

            <div className={styles.profile}>
                <Avatar src="https://avatars.githubusercontent.com/u/61715554?v=4" />

                {/* <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/61715554?v=4" alt="" /> */}

                <strong>Pedro Scobar</strong>
                <span>Java Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}