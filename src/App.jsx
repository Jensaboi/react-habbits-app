import { useState } from "react";
import Calendar from "./components/Calednar.jsx";
import Navbar from "./components/Navbar.jsx";
import CreateHabbitModal from "./components/CreateHabbitModal.jsx";

function App() {

    return (
        <>
            <Navbar />
            <Calendar />
            <CreateHabbitModal />
        </>
    );
}

export default App;
