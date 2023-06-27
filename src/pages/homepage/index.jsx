import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCirclePlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { HOMEPAGE, TASKPAGE, CONTACTPAGE } from '../../Routes';
import Task from '../../components/Task/task';

function Homepage(){
    const tasks = ["Walk the dog", "Feed the dog", "Wash the dog", "hello", "Write a blog post",
    "Research vacation destinations",
    "Organize digital files",
    "Create a budget spreadsheet",
    "Read a book",
    "Call a friend",
    "Update social media profiles",
    "Clean out the garage",
    "Plan a dinner party",
    "Complete a puzzle",
    "Learn a new recipe",
    "Go for a run",
    "Watch a movie",
    "Sort and declutter clothes",
    "Write a thank-you note",
    "Paint a picture",
    "Practice a musical instrument",
    "Volunteer at a local charity",
    "Learn a new language",
    "Take a photography walk",
    "Rearrange furniture in a room",
    "Research investment options",
    "Start a journal",
    "Try a new workout routine"
    ];
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

                    <div className="home-tasklist">
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
                                <Link to={HOMEPAGE}>
                                    <FontAwesomeIcon icon={faHouse} size="2xl" className='houseIcon' /> 
                                </Link>
                            </div>

                            <div className="topCenterIcon">
                                <Link to= {TASKPAGE}>
                                    <FontAwesomeIcon icon={faCirclePlus} size="2xl" className="plusIcon"/>
                                </Link>
                            </div>

                            <div className="rightIcon">
                                <Link to = {CONTACTPAGE}>
                                    <FontAwesomeIcon icon={faUser} size="2xl" className="userIcon"/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Homepage;