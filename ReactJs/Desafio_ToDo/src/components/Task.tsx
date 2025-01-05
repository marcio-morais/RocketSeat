import React from "react";
import styles from "../components/Task.module.css";

import {CheckCircle , Trash} from "@phosphor-icons/react";
import { Circle } from "@phosphor-icons/react/dist/ssr";

interface TaskProps {
  id: string;
  description: string;
  isCompleted: boolean;
  deleteTask: (id: string) => void;
  completeTask: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ id, description, isCompleted, deleteTask, completeTask }) => {
  
  function handoDeleteTask() {
    deleteTask(id);
  }

  function handoCompleteTask() {
    completeTask(id);
  }

  return (
    <div className={styles.container} >
      <button onClick={handoCompleteTask} className={styles.buttonCheckTask}>
          {isCompleted? 
            <CheckCircle size={20} className={styles.isCompleted} weight="fill"  /> : 
            <Circle size={20} className={styles.isNoCompleted
            } />
          }
        </button>
      
        <div className={styles.content}>
            <p>{description}</p>
        </div>
        <button onClick={handoDeleteTask} className={styles.buttonDeleteTask}>
          <Trash size={20} />
        </button>
    </div>
  );
}

export default Task;
