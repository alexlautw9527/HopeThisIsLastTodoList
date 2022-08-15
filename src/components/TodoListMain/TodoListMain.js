import { useState, useEffect } from 'react'
import TodoListPagination from './TodoListPagination'
import AddTodo from './AddTodo'
import TodoListItem from './TodoListItem'

const TodolistMain = () => {

    const [paginationStatus, setPaginationStatus] = useState('all')
    const [todoArr, setTodoArr] = useState([])

    const addTodoHandler = (content) => {
        const newTodo = {
            content: content,
            isDone: false,
            id: Date.now()
        }
        setTodoArr((prevArr) => { return [...prevArr, newTodo] })
    }

    const deleteSingleTodoHandler = (id) => {
        setTodoArr(prevArr => prevArr.filter(ele => ele['id'] !== id))
    }

    const paginationHandler = (e) => {
        const page = e.target.parentNode.dataset.page
        setPaginationStatus(page)
    }

    const toggleTodoHandler = (id) => {
        setTodoArr(prevArr => {
            return prevArr.map(ele => {
                if (ele['id'] === id) {
                    return { ...ele, isDone: !ele['isDone'] }
                }
                return ele
            })
        }
        )
    }



    const deleteDoneTodoHandler = () => {
        setTodoArr(prevArr => prevArr.filter(ele => ele['isDone'] === false))
    }

    const todoNum = todoArr.filter(ele => ele['isDone'] === false).length
    const filterTodoArr = todoArr.filter(ele => {
        if (paginationStatus === 'all') {
            return true
        } else if (paginationStatus === 'todo') {
            return ele['isDone'] === false
        } else {
            return ele['isDone'] === true
        }
    })
    useEffect(() => { console.log(todoArr) }, [todoArr])

    return (
        <div className='todoList_Content'>

            <AddTodo onAddTodo={addTodoHandler}></AddTodo>
            <div className="todoList_list">
                <TodoListPagination
                    onChangePagination={paginationHandler}
                    paginationStatus={paginationStatus}
                >
                </TodoListPagination>
                <div className="todoList_items">
                    <ul className="todoList_item">
                        {
                            filterTodoArr.map(ele => {
                                return (
                                    <TodoListItem
                                        key={ele.id}
                                        id={ele.id}
                                        content={ele.content}
                                        isDone={ele.isDone}
                                        onDeleteSingleTodo={deleteSingleTodoHandler}
                                        onToggleTodo={toggleTodoHandler}
                                    >
                                    </TodoListItem>
                                )
                            })
                        }


                    </ul>
                    <div className="todoList_statistics">
                        <p> {todoNum} 個未完成項目</p>
                        <a href="#" onClick={deleteDoneTodoHandler}>清除已完成項目</a>
                    </div>
                </div>
            </div>


        </div>


    )
}

export default TodolistMain