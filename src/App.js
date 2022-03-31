/*
* Dado que para crear un componente tipo clase en React, necesitamos extender(heredar) de la clase React,
* por lo que debemos importar dicha clase mediante:
* */
import React from "react";
import './App.css';
import Todo from "./components/Todo/Todo";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario: 'alex88',
            nombre: 'Alexander',
            apellido: 'Martinez',
            edad: 25,
            todos: [{
                nombre: 'Aprender componentes de tipo clase.',
                status: 'En progreso',
                id: 123
            },
            {
                nombre: 'Aprender eventos en React.',
                status: 'En progreso',
                id: 456
            }],
            newTodo: {
                nombre: '',
                status: 'Completo',
                id: 0
            }
        }
    }

    updateTodo = (idTodo, statusNew) => {
        let todosUpdated = this.state.todos;
        for (let i = 0; i < todosUpdated.length; i++) {
            if (todosUpdated[i].id === idTodo) {
                todosUpdated[i].status = statusNew;
            }
        }
        this.setState({todos: todosUpdated});
    }

    changeData = () => {
        this.setState({
            nombre: 'Alex',
            apellido: 'Garcia',
            edad: this.state.edad + 1
        });
    }

    addNewTodo = (event) => {
        event.preventDefault();
        this.setState({
            todos: [...this.state.todos, this.state.newTodo]
        });
        this.setState({
            newTodo: {
                nombre: '',
                status: '',
                id: 0
            }
        });
    }

    updateKeyNewTodo = (key, value) => {
        this.setState({
            newTodo: {
                ...this.state.newTodo,
                [key]: value
            }
        });
    }

    componentDidMount() {
        console.log("Esto se ejecuta después del cargado inicial, y solo se ejecuta una vez");
    }

    render() {
        const {title} = this.props;
        const {nombre, apellido, edad, todos} = this.state;
        return(
            <div className="App">
                <h1 className="title_App">{title}</h1>
                <h2>Bienvenido de vuelta {nombre} {apellido}. Edad {edad}</h2>
                <form onSubmit={this.addNewTodo}>
                    <div>
                        <label htmlFor="nombreTodo">Nombre todo: </label>
                        <input type="text" id="nombreTodo"
                               value={this.state.newTodo.nombre}
                               onChange={(event) => this.updateKeyNewTodo('nombre', event.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="statusTodo">Status todo: </label>
                        <select id="statusTodo"
                               onChange={(event) => this.updateKeyNewTodo('status', event.target.value)}>
                            <option value="Completo">Completo</option>
                            <option value="En progreso">En progreso</option>
                            <option value="Cancelado">Cancelado</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="idTodo">Id todo: </label>
                        <input type="number" id="idTodo"
                               value={this.state.newTodo.id}
                               onChange={(event) => this.updateKeyNewTodo('id', Number(event.target.value))} />
                    </div>
                    <button type="submit">Agregar</button>
                </form>
                <h3>Lista de pendientes</h3>
                <div className="lista_todos">
                    {/*{todos.map((todo, index) => <p key={'todo_' + index}>* {todo.nombre} - {todo.completo}</p>)}*/}
                    {todos.map((todo, index) => <Todo key={'todo_' + index} todo={todo} updateTodo={this.updateTodo}>
                        <p>Elemento enviado desde el componente padre</p>
                    </Todo>)}
                </div>
                <button onClick={() => this.changeData()}>Cambiar nombre a Alex</button>
            </div>
        );
    }
}

export default App;
