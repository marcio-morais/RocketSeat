import React, { useState } from 'react';
import styles from './NewTaskForm.module.css';
import { ClipboardText, PlusCircle} from '@phosphor-icons/react';
import Task from './Task';
import { v4 as uuidv4 } from 'uuid';



interface Task {
    id: string;
    description: string;
    isCompleted: boolean;
}

const NewTaskForm: React.FC = () => {
    const [tasks, setTasks] = useState([] as Task[]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const newTaskDescription = (event.target as HTMLFormElement).elements.namedItem('taskDescription') as HTMLInputElement;
        if (newTaskDescription.value.trim()) {
            setTasks([...tasks, { id: uuidv4(), description: newTaskDescription.value, isCompleted: false }]);
            newTaskDescription.value = '';
        }
    };

    function deleteTask (id: string) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    function completeTask (id: string) {
        const task = tasks.find((task) => task.id === id);
        if (task) {
            task.isCompleted = !task.isCompleted;
        }
        setTasks([...tasks]);
    }

    return (
        <div>
            <form className={styles.formTask} onSubmit={handleSubmit}>
                <input 
                    name="taskDescription"
                    type="text"
                    placeholder="Adicione uma nova tarefa" />
                <button type="submit"> 
                    <div className={styles.buttonCreateTask}>
                        <span>
                            Criar
                        </span>
                        <PlusCircle size={20} />
                    </div>
                </button>
            </form>
        
            <div className={styles.taskListHeader}>
                <div className={styles.numTaskCreated}>
                    <b>Tarefas Criadas</b>
                    <span className={styles.borderNumTask}>
                        {tasks.length}
                    </span>
                </div>
                <div className={styles.numTaskClosed}>
                    <b>Concluidas</b>
                    <span className={styles.borderNumTask}> 
                        {tasks.filter(task => task.isCompleted).length} de {tasks.length}
                    </span>
                </div>
            </div>
            
            <div>
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <Task 
                            key={task.id}
                            id={task.id}
                            description={task.description}
                            isCompleted={task.isCompleted}
                            deleteTask={deleteTask}                        
                            completeTask={completeTask}
                            />
                        ))
                    ) : (
                        <div className={styles.noTask} >
                            <ClipboardText size={56} />
                            <p><b>Você ainda não tem tarefas cadastradas</b></p>
                            <p>Crie tarefas e organize seus itens a fazer </p>
                        </div>
                    )
                }        
            </div>
        </div> 
    );
};

export default NewTaskForm;