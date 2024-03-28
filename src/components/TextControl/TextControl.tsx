import React, { ChangeEventHandler } from "react";
import { Button } from "../Button";

interface IButton {
    text: string;
    callback: Function;
}
interface ITextControl {
    inputValue: string,
    onChange: ChangeEventHandler<HTMLInputElement>
    left?: IButton[],
    right?: IButton[]
}

const TextControl:React.FC<ITextControl> = (props: ITextControl) => {
    const { inputValue, onChange, left, right } = props;

    return <div>
        {left?.map((el: any) => {
            return <Button onClick={el.callback}>
                {el.text}
            </Button>
        })}
        <input value={inputValue} onChange={onChange}/>
        {right?.map((el: any) => {
            return (
                <Button onClick={el.callback}>
                    {el.text}
                </Button>
            )
        })}
    </div>
}

export default TextControl;
