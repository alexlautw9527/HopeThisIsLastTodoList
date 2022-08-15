const TodoListPagination = ({ onChangePagination, paginationStatus }) => {

    const constPageArr = [
        { 'data-page': 'all', 'text': '全部' },
        { 'data-page': 'todo', 'text': '待完成' },
        { 'data-page': 'done', 'text': '已完成' },
    ]

    return (
        <>
            <ul className="todoList_tab">
                {
                    constPageArr.map((e) => {
                        const isActive = (e['data-page'] === paginationStatus)
                        return (
                            <li onClick={onChangePagination} data-page={e['data-page']}>
                                <a href='#' className={isActive ? 'active' : ''}>
                                    {e['text']}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}
export default TodoListPagination