import { makeObservable, observable, action } from "mobx";

export class TextInputStore {
    textControlExampleOne: string = '';
    textControlExampleTwo: string = '';
    autoCompleteControlExampleOne: string ='';
    autoCompleteControlExampleTwo: string ='';

    constructor() {
        makeObservable(this, {
            textControlExampleOne: observable,
            textControlExampleTwo: observable,
            setTextControlExampleOne: action,
            setTextControlExampleTwo: action,
            autoCompleteControlExampleOne: observable,
            autoCompleteControlExampleTwo: observable,
            setAutoCompleteControlExampleOne: action,
            setAutoCompleteControlExampleTwo: action
        });
    }

    setTextControlExampleOne = (value: string) => {
        this.textControlExampleOne = value;
    };

    setTextControlExampleTwo = (value: string) => {
        this.textControlExampleTwo = value;
    };

    setAutoCompleteControlExampleOne = (value: string) => {
        this.autoCompleteControlExampleOne = value;
    };

    setAutoCompleteControlExampleTwo = (value: string) => {
        this.autoCompleteControlExampleTwo = value;
    };
};
