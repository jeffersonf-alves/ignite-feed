import { Header } from './components/Header'
import style from './App.module.css'
import './global.css'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'


function App() {
  return (
    <>
     <Header></Header> 

     <div className={style.wrapper}>
        <Sidebar></Sidebar>
        <main>
          <Post
            author="Jeff Alves"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos natus, eius molestiae minus accusamus tempora accusantium sit, eveniet illum repellendus alias. Voluptate minus ducimus magni consequuntur enim non omnis perspiciatis!"
          ></Post>
          <Post
            author="Fernando Silva"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos natus, eius molestiae minus accusamus tempora accusantium sit, eveniet illum repellendus alias. Voluptate minus ducimus magni consequuntur enim non omnis perspiciatis!"
          ></Post>
        </main>
     </div>
    </>
  )
}



export default App
