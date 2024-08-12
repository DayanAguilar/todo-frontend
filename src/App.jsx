import { useEffect, useState } from "react";
import Header from "./assets/components/Header";
import TodoComputed from "./assets/components/TodoComputed";
import TodoCreate from "./assets/components/TodoCreate";
import TodoFilter from "./assets/components/TodoFilter";
import TodoList from "./assets/components/TodoList";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title,
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };
    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };
    const updateTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const [filter, setFilter] = useState("");
    const changeFilter = (filter) => setFilter(filter);
    const filteredTodos = () => {
        switch (filter) {
            case "all":
                return todos;
            case "active":
                return todos.filter((todo) => !todo.completed);
            case "completed":
                return todos.filter((todo) => todo.completed);
            default:
                return todos;
        }
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;
    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed));
    };
    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat  bg-contain bg-gray-300 min-h-screen dark:bg-gray-900">
            <Header></Header>
            <main className="container mx-auto px-4 mt-8">
                <TodoCreate createTodo={createTodo} />
                <div className="bg-white rounded-md mt-4">
                    <TodoList
                        todos={filteredTodos()}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />
                    <TodoComputed
                        computedItemsLeft={computedItemsLeft}
                        clearCompleted={clearCompleted}
                    />
                </div>
            </main>
            <TodoFilter changeFilter={changeFilter} filter={filter} />
            <p className="mt-8 text-center dark:text-gray-200">
                Drag and drop to reorder
            </p>
        </div>
    );
};
export default App;
