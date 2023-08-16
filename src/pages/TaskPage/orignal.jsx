import React from 'react';
import './index.css';
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HOMEPAGE} from '../../Routes';

function Taskpage(){
  //CREATE AND SAVE TASK NAME
    const [taskName, setTaskName] = useState(['']);

    const handleTaskNameChange = (e) => {
        setTaskName(e.target.value);
    };
    // Creating tasks
  const [tasks, setTasks] = useState([{ task: '', completed: false }]); //variable tasks represent an empty task
  const inputRefs=useRef([]); //store reference to input fields
  
  const handleKeyPress = (index, event) => { //adds empty task when enter is pressed
    if (event.key === 'Enter') {
      const newTasks = [...tasks];
      newTasks.splice(index + 1, 0, '');
      setTasks(newTasks);
    }
  };

  useEffect(() => {
    if (inputRefs.current && inputRefs.current.length > 0) {
      setTimeout(() => {
        inputRefs.current[inputRefs.current.length - 1].focus();
      }, 100);
    }
  }, [tasks]); {/*useEffect hook to focus on the latest input field whenever the tasks state changes. This ensures that the cursor moves to the newly created input field*/}

  const handleToggleTask = (index) => { //The handleToggleTask function modifies the code to strike through when completed
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleTaskChange = (index, event) => { //update task array
    const newTasks = [...tasks];
    newTasks[index] = { ...newTasks[index], task: event.target.value };
    setTasks(newTasks);
  };

  const handleTaskClick = (index) => { //allows mdification of earlier task by moving cursor
    inputRefs.current[index].focus();
  };


  // const handleRemoveTask = (index) => { //removes tasks when checkbox clicked
  //   const newTasks = [...tasks];
  //   newTasks.splice(index, 1);
  //   setTasks(newTasks);
  // };

  const namesectionRef = useRef(null);
  const TasklistRef = useRef(null);
 

  useEffect(() => {
    const namesectionHeight = namesectionRef.current.clientHeight;
    const remainingHeight = window.innerHeight - namesectionHeight;
    TasklistRef.current.style.height = `${remainingHeight}px`;
  }, []);

    return(
        <section>
            <div className="task-Page">
                <div className="task-icons">
                    <div className="back-icon">
                        <Link to= {HOMEPAGE} >
                            <FontAwesomeIcon icon={faChevronLeft} size="2xl" className="backicon"/>
                        </Link> 
                    </div>
                    <div className="more-icon">
                        <FontAwesomeIcon icon={faEllipsis} size="2xl" className="moreicon"/>
                    </div> 
                </div>
                <div className="task-name" ref={namesectionRef}>
                    {/* <p>personal</p> */}
                    <input type="text" value={taskName} onChange={handleTaskNameChange} placeholder="Enter task name" className="task-input"/> {/*value={taskName} onChange={handleTaskNameChange}*/}
                </div>
                <div className="tasklists" ref={TasklistRef}>
                  {tasks.map((task, index) => (
                        <div key={index} checked={task.completed} onClick={() => handleTaskClick(index)}>
                          <input type="checkbox" checked={task.completed} onChange={() => handleToggleTask(index)}/>
                          <input type="text" value= {task.task} className= "task-items" onChange={(event) => handleTaskChange(index, event)} onKeyPress={(event) => handleKeyPress(index, event)} ref={(el) => (inputRefs.current[index] = el)} style={{textDecoration: task.completed ? 'line-through' : 'none',}}/> 
                          {/* ref={(el) => (inputRefs.current[index] = el)} => store its reference in the inputRefs array
                          onKeyPress={(event) => handleKeyPress(index, event)} */}
                        </div>
                  ))}
                </div>
            </div>
        </section>
    )
}
export default Taskpage;