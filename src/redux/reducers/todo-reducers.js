import axios from "axios"

const initialValue = {
    todos: [],
    editprops: {
        id: 0,
        value: ""
    },
    isLoading: false,
    message:"",
}

function todoReducer(state = initialValue, action) {
    switch (action.type) {
        case "START_FETCHING":
            return {
                ...state,
                isLoading: true
            }
        case "SUCCESS_GET_TODO":
            return {
                ...state,
                isLoading: false,
                message:action.payload.message,
                todos: action.payload.todos
            }
        case "GET_TODO":
            let editValue = {
                id: action.payload.id,
                value: action.payload.value
            }
            return {
                ...state,
                editprops: editValue
            }
        default:
            return state
    }
}
function startFetching() {
    return {
        type: "START_FETCHING"
    }
}
function successGetTodo(data) {
    return {
        type: "SUCCESS_GET_TODO",
        payload: data
    }
}
export function getAllTodo() {
    return async function (dispatch) {
        dispatch(startFetching())
        const token = localStorage.getItem("token")
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        };
        const { data } = await axios.get(`http://localhost:3000/todos/`, { headers })
        dispatch(successGetTodo(data))
    }
}
export function toggleTodo(id) {
    return async function (dispatch) {
        dispatch(startFetching())
        const token = localStorage.getItem("token")
        console.log(id)
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        };
        await axios.patch(`http://localhost:3000/todos/${id}/toggle`, {}, { headers })
        dispatch(getAllTodo())
    }
}
export function addTodo(data) {
    return async function (dispatch) {
        console.log(data)
        dispatch(startFetching())
        const token = localStorage.getItem("token")
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        };
        await axios.post(`http://localhost:3000/todos/`, { data }, { headers })

        dispatch(getAllTodo())
    }
}
export function getEditTodo(props) {
    return {
        type: "GET_TODO",
        payload: props
    }
}
export function editTodo(data) {
    return async function (dispatch) {
        dispatch(startFetching())
        const token = localStorage.getItem("token")
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        };
        await axios.patch(`http://localhost:3000/todos/${data.id}`, { data }, { headers })
        dispatch(getAllTodo())
    }
}
export function deleteTodo(id) {
    return async function (dispatch) {
        dispatch(startFetching())
        const token = localStorage.getItem("token")
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        };
        await axios.delete(`http://localhost:3000/todos/${id}`, { headers })

        dispatch(getAllTodo())
    }
}
export default todoReducer