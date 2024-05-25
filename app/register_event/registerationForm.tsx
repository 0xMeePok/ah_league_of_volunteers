'use client';
import { useState } from "react";
import TextInput from "./textInput";

const RegistrationForm = () => {
    const [eventName, setEventName] = useState("")
    function handleClick() {
        console.log(eventName);
    }
    return (
        <form className="flex flex-col" >
            <TextInput InputName="Event Name" currentValue={eventName} setValue={setEventName}/>
            <button onClick={handleClick}>
                Submit
            </button>
        </form>
    );
}
 
export default RegistrationForm;


