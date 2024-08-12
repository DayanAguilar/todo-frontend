import { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("");
    const handleSubmitAddTodo = (e) => {
        e.preventDefault();
        if (title.trim().length > 0) {
            createTodo(title);
            setTitle("");
        }
        setTitle("");
    };
    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="flex gap-4 items-center overflow-hidden rounded-md bg-white py-4 px-4 mt-8
            dark:bg-gray-800"
        >
            <span className="inline-block rounded-full h-5 w-5 roundef-full border-2"></span>
            <input
                type="text"
                placeholder="Create a new todo.."
                className="w-full text-gray-400 border-none outline-none dark:bg-gray-800"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};
export default TodoCreate;
