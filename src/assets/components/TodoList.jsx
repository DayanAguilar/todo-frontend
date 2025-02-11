import TodoItem from "./TodoItem";
const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                ></TodoItem>
            ))}
        </>
    );
};

export default TodoList;
