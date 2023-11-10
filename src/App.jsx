import { useState } from "react";
import Calendar from "./components/Calednar.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navbar />
            <Calendar />
        </>
    );
}

export default App;
