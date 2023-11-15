import { Header } from './components/Header'
import style from './App.module.css'
import './global.css'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'


const posts = [
  {
    id: 1,
    author: {
      avataUrl: 'https://github.com/jeffersonf-alves.png',
      name: 'Jefferson Alves',
      role: 'Frontend Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '<a href="">jane.design/doctorcare</a>'}
    ],
    publishedAt: new Date('2022-03-17 20:00:00')
  },
  {
    id: 2,
    author: {
      avataUrl: 'https://github.com/jeffersonf-alves.png',
      name: 'Zézinho Alves',
      role: 'Backend Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: '<a href="">jane.design/doctorcare</a>'}
    ],
    publishedAt: new Date('2023-10-20 13:30:00')
  }
]

function App() {
  return (
    <>
     <Header></Header> 

     <div className={style.wrapper}>
        <Sidebar></Sidebar>
        <main>
          {posts.map(post => {
              return (<Post 
                    key={post.id}
                    author={post.author}
                    content={post.content}
                    publishedAt={post.publishedAt}
                />)
          })}
        </main>
     </div>
    </>
  )
}



export default App
