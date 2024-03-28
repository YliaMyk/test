import React from "react";
import "./App.css";
import { observer } from 'mobx-react';
import { TextInputStore } from './stores';
import { TextControl, InputAutoComplete } from "./components";


const textInputStore = new TextInputStore();

const exampleOneRightButtons = [
    {
        text: "Clear",
        callback: () => {
            textInputStore.setTextControlExampleOne('');
        }
    },
    {
        text: "Hello world!",
        callback: () => {
            textInputStore.setTextControlExampleOne('Hello world!');
        }
    }
]

const exampleTwoRightButtons = [
    {
        text: "Alert",
        callback: () => {
            alert(textInputStore.textControlExampleTwo)
        }
    }
]

const exampleTwoLeftButtons = [
    {
        text: "Check is number",
        callback: () => {
            if (Number(textInputStore.textControlExampleTwo)) {
                alert(textInputStore.textControlExampleTwo)
            }
        }
    }
]

const App: React.FC = observer(() => {
    return <div>
        <TextControl 
            inputValue={textInputStore.textControlExampleOne}
            onChange={(event: any) => textInputStore.setTextControlExampleOne(event.target.value)}
            right={exampleOneRightButtons}
        />
        <TextControl
            inputValue={textInputStore.textControlExampleTwo}
            onChange={(event: any) => textInputStore.setTextControlExampleTwo(event.target.value)}
            left={exampleTwoLeftButtons}
            right={exampleTwoRightButtons}
        />
        <InputAutoComplete
            inputValue={textInputStore.autoCompleteControlExampleOne}
            onChange={textInputStore.setAutoCompleteControlExampleOne}
            maxSuggestions={3}
        />
        <InputAutoComplete 
            inputValue={textInputStore.autoCompleteControlExampleTwo}
            onChange={textInputStore.setAutoCompleteControlExampleTwo}
            maxSuggestions={10}
        />
    </div>;
});

export default App;
