import React from 'react';

//the function below has two props:text and background
function Task({text}) {
  const name = "Sandra"; 
  const object = {
    name
  }
  return <li className='task-items' style={{}}>{text}</li> //style sets backgroundColor prop  as background for <li>
}

export default Task;