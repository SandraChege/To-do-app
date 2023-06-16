import React from 'react';
import './index.css';
/*import Homelist from '../components/Images/homelist.jpg';*/
import Homelist from './homelist.jpg';
// import Homelist from './../../images/homelist.jpg';
import Button from '../../components/Button';
import {useNavigate} from 'react-router-dom';
import { HOMEPAGE } from '../../Routes';
// import { LANDPAGE } from '../../Routes';
// import { Link } from 'react-router-dom';



function landingPage(){
    const navigate = useNavigate();
    // const handleClick = () => {
    //     navigate(HOMEPAGE);
    //     console.log("You clicked me");
    // }
    return(
        <section>
            <div className="landPage">
                <div className="landcontainer">
                    <h2 className="landtitle">Doingly</h2>
                    <div className="landimg">
                        <img src={Homelist} alt="A picture of a man ticking away completed tasks" height={450} width={400}/>
                    </div>
                    <div className="landcontent">
                        <h3>
                            Welcome to Doingly
                        </h3>
                        <p>
                            Doingly makes it easier for you to stay organized and complete your tasks with greater efficiency.
                        </p>
                    </div>
                    <div className="landbtn">
                        {/* <Link to ={HOMEPAGE}>
                            <Button text="Get Started"/>
                        </Link> */}
                        <Button text="Get Started" myHandler={(e)=>{
                                navigate(HOMEPAGE);
                        }}/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default landingPage;

