// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import AppDispatcher from '../dispatcher/AppDispatcher';
import ActionConstants from '../constants/ActionConstants';

class TodoAction {
    createTodo(inTodoText) {
        AppDispatcher.dispatch({
            actionType: ActionConstants.TODO_CREATE,
            text: inTodoText
        });
    }
}

export default TodoAction;