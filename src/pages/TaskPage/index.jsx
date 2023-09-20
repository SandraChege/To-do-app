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
  const inputRefs=useRef([]); //store reference to input fields
  const [tasks, setTasks] = useState([{ task: '', completed: false }]); //Initialize variable tasks represent an empty task


  const handleToggleTask = (index) => { //The handleToggleTask function modifies the code to strike through when completed
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const handleTaskChange = (index, event) => { //update task array
    const newTasks = [...tasks];
    newTasks[index] = { ...newTasks[index], task: event.target.value};
    setTasks(newTasks);
  };

  const handleKeyPress = (index, event) => { //adds empty task when enter is pressed
    if (event.key === 'Enter') {
      const currentInputValue = event.target.value;
      // const {target: {value: currentInputValue} }= event;

      if(currentInputValue.match(/^[a-zA-Z0-9\s]+$/)){ // Check if the current input consists of alphanumeric characters
        const newTasks = [...tasks];
        newTasks.push({ task: '', completed: false })
        setTasks(newTasks); 

        //Focus on the newly added input field
        // if (inputRefs.current[index + 1]) {
        //   inputRefs.current[index + 1].focus();
        // }
        console.log("updated tasks:", newTasks)
      }
    }
  };

  useEffect( ( ) =>{
    //Focus on the newly added input field
    if (inputRefs.current[tasks.length - 1]) {
      inputRefs.current[tasks.length - 1].focus();
      console.log(tasks);
    } }, [tasks] 

    );
    //TASK EDITING

    /* 
      Manage the state i.e track whether a task is in edit mode or not
      1. Use an array to track each individual. If i want to track the entire component use const (isEditing, setIsEditing) = useState(false);
      2. Initializing the isEditing with tasks.length ensures that there is a one on one correspondence btwn tasks and editing mode
      3. State set to false to indicate no task is in edit mode initially
      4. By doing so, when a user clicks on a specifc task to edit it, only the clicked task state will change.
    */
    const [isEditing, setIsEditing] = useState(Array(tasks.length).fill(false));
    /*
      Functio toggles the edit mode.
      1. The function below takes index as a parameter to identify which task is being edited.
      2. Create a new array `newIsEditing` and spread the elements of `isEditing` in it. 
      3. `newIsEditing[index] = true`updates an element at a specific index to true since it was initially false
    */
    
    const handleTaskClick = (index) => {
      const newIsEditing = [...isEditing];
      newIsEditing[index] = true;
      setIsEditing(newIsEditing);
    };
    /*
      Blur event occurs when an element looses focus.
      The function below is responsible for exiting the 
      1.The function below takes index as a parameter to identify which task is being affected by blur event.
      2.Create a new array `newIsEditing` and spread the elements of `isEditing` in it.
      3. `newIsEditing[index] = false`updates an element at a specific index to false since it was initially true i.e task leaves edit mode to read mode after loosing focus
    */
    const handleTaskBlur = (index) => {
      const newIsEditing = [...isEditing];
      newIsEditing[index] = false;
      setIsEditing(newIsEditing);
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
          {/* TASK RENDERING */}
          <div className="tasklists" ref={taskListRef}>
            {tasks.map((task, index) => (
              <div key={index} className={task.completed ? "task-completed" : ""}>
                
                <input 
                  type="checkbox" 
                  checked={task.completed} 
                  onChange={() => handleToggleTask(index)}
                /> 
        
                {isEditing[index] ? (
                  <input 
                    type="text" 
                    value = {tasks[index].task} 
                    className = "task-items" 
                    onChange = {(event) => handleTaskChange(index, event)} 
                    ref = {(el) => (inputRefs.current[index] = el)} 
                    onKeyDown = {(e) => handleKeyPress(index, e)}
                    onBlur = {() => handleTaskBlur(index)} 
                    style = {{ 
                      textDecoration: task.completed ? 'line-through' : 'none', 
                    }}
                  />
                ) : (
                  <span onClick={() => handleTaskClick(index)}>
                    {tasks[index].task}
                  </span>
                )}
              </div>
            ))}
          </div>
          {/*TASK LIST ENDS*/}       
        </div>
      </section>
    )
}
export default Taskpage;