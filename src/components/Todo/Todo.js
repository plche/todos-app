import './Todo.css';
function Todo(props) {
    const {todo, updateTodo, children} = props;
    return(
        <div className="tarjeta_todo">
            <h3 className="titulo_todo">Pendiente: {todo.nombre}</h3>
            <p className="status_todo">Status: {todo.status}</p>
            <div>
                {(todo.status !== 'Completo') ?
                    (<button onClick={() => updateTodo(todo.id, 'Completo')}>Completar</button>) : ""}
                {(todo.status !== 'En progreso') ?
                    (<button onClick={() => updateTodo(todo.id, 'En progreso')}>En progreso</button>) : ""}
                {(todo.status !== 'Cancelado') ?
                    (<button onClick={() => updateTodo(todo.id, 'Cancelado')}>Cancelado</button>) : ""}
            </div>
            {children}
        </div>
    );
}
export default Todo;