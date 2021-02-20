import {createStore} from "redux"
import {createActions, handleActions} from "redux-actions"

const defaultState = {
    showSignUp: false,
    showTodoForm: false,
    user: null,
    showLogin: false,
    editTodo: null,
    errors: [],
    todos: []

}

const {ui, todos} = createActions("SHOW_SIGNUP", "HIDE_SIGNUP")

const reducer = handleActions({
    [ui.signup]:
}, defaultState)

export default createStore(
    reducer,
    defaultState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
