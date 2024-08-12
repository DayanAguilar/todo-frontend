const TodoComputed = ({computedItemsLeft,clearCompleted}) => {
    return (
        <section className="py-4 px-4 text-gray-400 flex justify-between dark:bg-gray-800">
            <span>{computedItemsLeft} items left</span>
            <button className="text-gray-400" onClick={clearCompleted}>Clear completed</button>
        </section>
    );
};
export default TodoComputed;
