import { Dispatch, SetStateAction } from "react";

interface TextInputInterface {
    InputName: string,
    currentValue: string,
    setValue: Dispatch<SetStateAction<string>>
}

const TextInput = ({InputName, currentValue, setValue} : TextInputInterface) => {
    return (
        <div className="text-center">
            <text className="mr-5">Event name:</text>
            <input type="text" onChange={(e) => setValue(e.target.value)}/>
        </div>
    );
}
 
export default TextInput;