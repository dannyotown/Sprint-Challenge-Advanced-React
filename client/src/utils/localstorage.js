  import {useState} from 'react';

export function useLocalStorage(key, initialValue){
    const [storedValue, setValue] = useState(()=>{
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    })
    const customSetter = (initialValue)=>{
        setValue(initialValue);
        window.localStorage.setItem(key, initialValue)
    }
    return [storedValue, customSetter];
}