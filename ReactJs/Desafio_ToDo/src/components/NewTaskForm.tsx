import React from 'react';
import styles from './NewTaskForm.module.css';
import { PlusCircle} from '@phosphor-icons/react';


const NewTaskForm: React.FC = () => {
    return (
        <div>
            <form className={styles.formTask}>
                <input
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
                        5
                    </span>
                </div>
                <div className={styles.numTaskClosed}>
                    <b>Concluidas</b>
                    <span className={styles.borderNumTask}> 
                        5 de 10
                    </span>
                </div>
            </div>
        </div>        
    );
};

export default NewTaskForm;