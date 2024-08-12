import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
    const { id, title, completed } = todo;
    return (
        <article className="flex gap-4 py-4 border-b border-b-gray-400 px-4 dark:bg-gray-800">
            <button
                className={`rounded-full h-5 w-5${
                    completed
                        ? " roundef-full border-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
                        : " roundef-full border-2 "
                }`}
                onClick={() => updateTodo(id)}
            >
                {" "}
                {completed && <CheckIcon />}
            </button>
            <p className={`text-gray-500 grow dark:text-gray-200 ${completed && "line-through"}`}>
                {title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <CrossIcon></CrossIcon>
            </button>
        </article>
    );
};

export default TodoItem;
