import React from 'react';

//the function below has two props:text and background
function Task({text}) {
  const taskStyle = {
    listStyleType: 'none',
    padding: '15px 10px',
    margin: '8px auto',
    backgroundColor: '#F2F2F2',
  };
  return <li className='task-items' style={taskStyle}>{text}</li> //style sets backgroundColor prop  as background for <li>
}

export default Task;