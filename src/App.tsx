import React from "react";
import style from "./App.module.scss";
import { Tweet } from "./components";

function App() {
    return (
        <div className={style.app}>
            <main>
                <Tweet account="Some person" timestamp={Date.now()} content="Bla bla bla" />
            </main>
        </div>
    );
}

export default App;
