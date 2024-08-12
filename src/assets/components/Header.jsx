import { useEffect, useState } from "react";
import Moon from "./icons/Moon";
import SunIcon from "./icons/SunIcon";

const inicialStateDarkMode =localStorage.getItem("theme") === "dark";
const Header = () => {
    const [darkMode, setDarkMode] = useState(inicialStateDarkMode);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-5 pt-8">
            <div className="flex justify-between">
                <h1
                    className="uppercase text-white text-3xl font-semibold 
            tracking-[0.3em] "
                >
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <SunIcon></SunIcon> : <Moon></Moon>}
                </button>
            </div>
        </header>
    );
};
export default Header;
