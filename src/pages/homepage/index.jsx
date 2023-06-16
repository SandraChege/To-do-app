import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCirclePlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HOMEPAGE, TASKPAGE, CONTACTPAGE } from '../../Routes';
import Task from '../../components/Task/task';

function Homepage(){
    const tasks = ["Walk the dog", "Feed the dog", "Wash the dog", "hello"];
    const newTask = {
        // text: taskText,
        backgroundColor: '#F2F2F2',
    };
    return(
        <section>
            <div className="homePage">
                <div className="homecontainer">
                    <div className="namesection">
                        <p>Hello <span>FETCH NAME</span> <br/> </p>
                        <p>This are all your tasks</p>
                    </div>

                    <div className="hometasklist">
                        {
                            tasks.map(task=>{
                                return <Task text= {task} />
                            })
                        }
                        {/* <Task text= "WALK THE DOG"  backColor={{backgroundColor:"yellow"}} /> */}
                    </div>

                    <div className="homenavigation">
                        <div className="icons">
                            <div className="leftIcon">
                                <Link to="/">
                                    <FontAwesomeIcon icon={faHouse} size="xl" className='houseIcon' /> 
                                </Link>
                            </div>

                            <div className="topCenterIcon">
                                <Link to={TASKPAGE}>
                                    <FontAwesomeIcon icon={faCirclePlus} size="xl" className="plusIcon"/>
                                </Link>
                            </div>

                            <div className="rightIcon">
                                <FontAwesomeIcon icon={faUser} size="xl" className="userIcon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Homepage;