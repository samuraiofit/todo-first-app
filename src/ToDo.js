import removeImg from './images/removeImg.png'

function ToDo({todo, removeTask, handlerToggle}){
    return (
        <div key={todo.id} className="item-todo">
            <div className={todo.complete ? 'item-text strike' : 'item-text'}
            onClick={() => handlerToggle(todo.id)}
            >
                {todo.task}
            </div>
            <div onClick={() => removeTask(todo.id)}>
                <img src={removeImg} alt=''>
                </img>
            </div>
        </div>
    )
}


export default ToDo