import React from 'react';

//the function below has two props:text and background
function Task({text}) {
  const taskStyle = {
    listStyleType: 'none',
    padding: '10px 5px',
    margin: '8px',
    backgroundColor: '#F2F2F2',
  };
  return <li className='task-items' style={taskStyle}>{text}</li> //style sets backgroundColor prop  as background for <li>
}

export default Task;