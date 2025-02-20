
import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";

function App() {


  return (
      <div >
        <Header/>
          <Main/>
          <Skills/>
      </div>
  )
}

export default App
