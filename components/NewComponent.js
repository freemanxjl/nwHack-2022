import {useState, useEffect} from 'react'

export function NewComponent(){
    const [variable, setVariable] = useState("");

    useEffect(() => {
        setVariable("Test");
    }, []);

    const clicked = ({parameter1}) => {
        setVariable("Button Clicked!");
    };

    return(
        <div>
            {variable}
            <button onClick={clicked}>Button</button>
        </div>
    )
}

export default NewComponent;