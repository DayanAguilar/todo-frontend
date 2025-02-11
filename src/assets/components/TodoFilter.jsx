const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto px-4 mt-8">
            <div className="bg-white p-4 rounded-md flex justify-center gap-3 dark:bg-gray-800">
                <button
                    className={`${
                        filter === "all" ? "text-blue-600" : "text-gray-600 dark:text-gray-200"
                    }`}
                    onClick={() => changeFilter("all")}
                >
                    All
                </button>
                <button
                    className={`${
                        filter === "active" ? "text-blue-600" : "text-gray-600 dark:text-gray-200"
                    }`}
                    onClick={() => changeFilter("active")}
                >
                    Active
                </button>
                <button
                    className={`${
                        filter === "completed" ? "text-blue-600" : "text-gray-600 dark:text-gray-200"
                    }`}
                    onClick={() => changeFilter("completed")}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};

export default TodoFilter;
