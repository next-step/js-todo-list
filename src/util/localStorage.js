const TODOS = "todos"

const getTodos = () => {
    const value = localStorage.getItem(TODOS);

    return JSON.parse(value) ?? [];
}

const setTodo = (value) => {
    if (value === null || value === undefined) return;

    const toJson = JSON.stringify(value);

    localStorage.setItem(TODOS, toJson);
}


export { getTodos, setTodo }
