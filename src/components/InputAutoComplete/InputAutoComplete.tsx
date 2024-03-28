import React, { useState } from "react";
import { getCountryByName } from "../../api/apiService";

interface IOption {
    name: string;
    fullName: string;
    flag: string;
}
  
interface IAutoCompleteTextInputControlProps {
    inputValue: string;
    onChange: Function;
    maxSuggestions: number;
}

const InputAutoComplete: React.FC<IAutoCompleteTextInputControlProps> = (props: IAutoCompleteTextInputControlProps) => {
    const { maxSuggestions, inputValue, onChange } = props;
    const [suggestions, setSuggestions] = useState<IOption[]>([]);
    const [isLoader, setIsLoader] = useState(false);
    
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        onChange(value);
    
        if (value.trim() !== '') {
            setIsLoader(true);
            getCountryByName(value).then((data) => {
                setSuggestions(data.slice(0, maxSuggestions));
                setIsLoader(false);
            });
        } else {
          setSuggestions([]);
        }
    };
    
    const handleSuggestionClick = (option: IOption) => {
        onChange(option.fullName);
        setSuggestions([]);
    };
    return (
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange} />
            {isLoader && 
                <p>load...</p>
            }
            {!isLoader && 
                <ul>
                    {suggestions?.map((option, index) => (
                        <li key={index} onClick={() => handleSuggestionClick(option)}>
                            {option.name} - {option.fullName}
                            <img src={option.flag} width="40" height="20"/>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
}

export default InputAutoComplete;
