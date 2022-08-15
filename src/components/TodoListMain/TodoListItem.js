const TodoListItem = ({ id, content, isDone, onDeleteSingleTodo, onToggleTodo }) => {

    return (
        <>
            <li key={id}>
                <label className="todoList_label"
                    onClick={(e) => {
                        e.target.tagName === 'INPUT' && onToggleTodo(id)
                        onToggleTodo(id)
                    }}>
                    <input className="todoList_input" type="checkbox" defaultChecked={isDone} />
                    <span>{content}</span>
                </label>
                <a href="#" onClick={() => { onDeleteSingleTodo(id) }}>
                    <i className="fa fa-times" />
                </a>
            </li>
        </>
    )
}

export default TodoListItem