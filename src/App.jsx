import { Header } from './components/Header'
import style from './App.module.css'
import './global.css'
import { Post } from './Post'
import { Sidebar } from './components/Sidebar'


function App() {
  return (
    <>
     <Header></Header> 

     <div className={style.wrapper}>
        <Sidebar></Sidebar>
        <main>
          <Post></Post>
          <Post></Post>
        </main>
     </div>
    </>
  )
}

export default App
