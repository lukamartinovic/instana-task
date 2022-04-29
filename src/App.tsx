import React from "react";
import style from "./App.module.scss";
import { Subscribe } from "@react-rxjs/core";
import { tweets } from "./observables";
import { Header } from "./components/Header/Header";
import { Tweets } from "./components/Tweets/Tweets";

function App() {
    return (
        <div className={style.app}>
            <Header />
            <Subscribe source$={tweets}>
                <Tweets />
            </Subscribe>
        </div>
    );
}

export default App;
