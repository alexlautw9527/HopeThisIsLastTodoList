import { useState } from "react"



const AddTodo = ({ onAddTodo }) => {
    const [inputText, setInputText] = useState("")
    const inputChangeHandler = (e) => {
        setInputText(e.target.value)
    }

    return (
        <>
            <div className="inputBox">
                <input type="text" value={inputText} placeholder="請輸入待辦事項" onChange={inputChangeHandler} />
                <a href="/" onClick={
                    (e) => {
                        e.preventDefault();
                        onAddTodo(inputText);
                        setInputText('');
                    }
                }>
                    <i className="fa fa-plus"></i>
                </a>
            </div>
        </>
    )
}


export default AddTodo