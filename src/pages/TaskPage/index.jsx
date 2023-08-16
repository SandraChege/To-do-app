import React from 'react';
import './index.css';
import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HOMEPAGE} from '../../Routes';

function Taskpage(){
  //CalculaTes the height of the tasks and name section 
  const taskNameRef = useRef(null);
  const taskListRef = useRef(null);
 
  useEffect(() => {
    const namesectionHeight = taskNameRef.current.clientHeight;
    const remainingHeight = window.innerHeight - namesectionHeight;
    taskListRef.current.style.height = `${remainingHeight}px`;
  }, []);


  //Creates and save task Name
  const [taskName, setTaskName] = useState('');

  const handleTaskNameChange = (event) => { //The handleTaskNameChange updates the taskname state with current input value
    setTaskName(event.target.value);
  };
  
  //CREATE AND SAVE LIST OF TASKS
  const [tasks, setTasks] = useState([{ task: '', completed: false }]); //variable tasks represent an empty task
  const inputRefs=useRef([]); //store reference to input fields
  
  

  useEffect(() => {
    if (inputRefs.current && inputRefs.current.length > 0) {
      // setTimeout(() => {
      //   inputRefs.current[inputRefs.current.length - 1].focus();
      // }, 1000);
    }
  }, [tasks]); {/*useEffect hook to focus on the latest input field whenever the tasks state changes. 
                This ensures that the cursor moves to the newly created input field*/}

  const handleToggleTask = (index) => { //The handleToggleTask function modifies the code to strike through when completed
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleTaskChange = (event) => { //update task array
    const newTasks = [...tasks];
    newTasks[0] = { ...newTasks[0], task: event.target.value };
    setTasks(newTasks);
  };

  const handleKeyPress = (index, event) => { //adds empty task when enter is pressed
    if (event.key === 'Enter') {
      const currentInputValue = event.target.value;

      if(currentInputValue.match(/^[a-zA-Z0-9]+$/)){
        const newTasks = [...tasks];
        newTasks.push({ task: '', completed: false })
        setTasks(newTasks);

      }
    }
  };
  
  const handleTaskClick = (index) => { //allows mdification of earlier task by moving cursor
    inputRefs.current[index].focus();
  };

    return(
      <section>
        <div className="task-Page">

          {/* START OF TASK ICON */}
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
          {/* END OF TASK ICON */}

          {/* NAME SECTION STARTS */}
            <div className="task-name" ref={taskNameRef}>
              <input type="text" value={taskName} onChange={handleTaskNameChange} placeholder="Enter task name" className="task-input"/>
            </div>
          {/* NAME SECTION ENDS */}

          {/*TASK LIST STARTS*/}
          <div className="tasklists" ref={taskListRef}>
    
            
            
            {tasks.map((task, index) => (
              <div>
                <input type="checkbox" checked={false} 
                onChange={() => handleToggleTask(index)}
                />
              
              <input type="text" value={tasks[index].task} 
                className= "task-items" 
                onChange={(event) => handleTaskChange(event)} 
                ref={(el) => (inputRefs.current[index] = el)} 
                style={{textDecoration: true ? 'line-through' : 'none',}}
                onKeyDown={(e)=>handleKeyPress(index, e)}
              />
              </div>
            ))}
          </div>
          {/*TASK LIST ENDS*/}       
        </div>
      </section>
    )
}
export default Taskpage;