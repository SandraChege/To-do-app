import React from 'react';
import './index.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faChevronLeft} from '@fortawesome/free-solid-svg-icons';

function Taskpage(){
    const [taskName, setTaskName] = useState('');

    const handleTaskNameChange = (e) => {
        setTaskName(e.target.value);
    };


    return(
        <section>
            <div className="task-Page">
                <div className="task-icons">
                    <div className="back-icon"><FontAwesomeIcon icon={faChevronLeft} size="2xl"/> </div>
                    <div className="more-icon"><FontAwesomeIcon icon={faEllipsis} size="2xl" /></div> 
                </div>
                <div className="task-name">
                    {/* <p>personal</p> */}
                    <input type="text" value={taskName} onChange={handleTaskNameChange} placeholder="Enter task name" className="task-input"/> {/*value={taskName} onChange={handleTaskNameChange}*/}
                </div>
                <div className="task-lists"></div>
            </div>
        </section>
    )
}
export default Taskpage;