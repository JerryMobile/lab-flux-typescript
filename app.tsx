/// <reference path="typings/tsd.d.ts" />


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TodoApp from './Flux/components/TodoApp';


class Hello extends React.Component<any, any>{
    constructor(props) {
        super(props);
    }

    render() {
        return <div>Hello Flux aa</div>
    }
}


ReactDOM.render(
    <TodoApp/>,
    document.getElementById('example')
);
