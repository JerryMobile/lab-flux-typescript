// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

/// <reference path="../../typings/react/react-global.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TodoStore from '../stores/TodoStore';
import TodoAction from '../actions/TodoAction';
import TodoAppList from './TodoAppList';

export default class TodoApp extends React.Component<{}, {}> {
    //********** React Component LifeCycle **********

    constructor(props) {
        super(props);
        this.state = { todoItems: TodoStore.getTodoItems() };
    }
    

    componentDidMount() {
        this.setState({ todoItems: TodoStore.getTodoItems() });

        TodoStore.addChangeListener(this.changeHandler.bind(this));
    }

    componentWillUnmount() {
        TodoStore.removeChangeListener(this.changeHandler.bind(this));
    }

    //********** Features **********
    changeHandler() {
        this.setState({ todoItems: TodoStore.getTodoItems() });
    }

    public handleAddTodo() {
        var newTodo = ReactDOM.findDOMNode<HTMLInputElement>(this.refs["txtT"]).value;
        new TodoAction().createTodo(newTodo);
        ReactDOM.findDOMNode<HTMLInputElement>(this.refs["txtT"]).value = '';
    }

    //********** DOM **********
    render() {
        return (
            <div>
                <h1>Todo</h1>
                <input type='text' ref="txtT"></input>
                <button onClick={this.handleAddTodo.bind(this)}>Add</button>
                <TodoAppList Items={TodoStore.getTodoItems()}/>
            </div>

        );
    }
}

