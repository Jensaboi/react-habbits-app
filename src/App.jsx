import { useState } from "react";
import Calendar from "./components/Calednar.jsx";
import Navbar from "./components/Navbar.jsx";
import AddHabbitModal from "./components/AddHabbitModal.jsx";

function App() {

    return (
        <>
            <Navbar />
            <Calendar />
            <AddHabbitModal />
        </>
    );
}

export default App;
