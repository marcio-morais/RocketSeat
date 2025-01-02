import React from "react";
import styles from "../components/Task.module.css";

import {CheckCircle , Trash} from "@phosphor-icons/react";


const Task: React.FC = () => {
  return (
    <div className={styles.container} >
        <CheckCircle size={20}/>        
        <div className={styles.content}>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim suscipit nostrum sequi, est dolorum ab eum non </p>
        </div>
        <button>
          <Trash size={20}/>
        </button>
    </div>
  );
}

export default Task;