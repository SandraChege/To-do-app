import React, {useState} from 'react';
import Button from "../../components/Button";

const LandingPage = () => {

   const [name, setName] = useState("No name");

    function handleInputChange(event) {
        const {target} = event;

        setName(target.value);

        // console.log(target.value);
        // console.log(target.name);
    }

    return (
        <div>
            This is the landing page
            <input type="text" name="name" onChange={handleInputChange} />

            <p>The name is {name}</p>
            <Button text="my button" />
        </div>
    )
}

export default LandingPage;
