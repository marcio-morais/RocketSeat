import  Header from "./components/Header"
import NewTaskForm from "./components/NewTaskForm"
import Task from "./components/Task"
import {ClipboardText } from "@phosphor-icons/react"
import "./global.css"

function App() {
  return (
    <div>
      <Header/>      
      <div className="containerGlobal">
        <NewTaskForm />          
        <div>
        <ClipboardText  size={56}/>
          <div>
            <p><b>Você ainda não tem tarefas cadastradas</b></p>
            <p>Crie tarefas e organize seus itens a fazer </p>
          </div>

          <Task/>    
          <Task/>
          <Task/>
        </div>
      </div>
    </div>
  )
}

export default App
