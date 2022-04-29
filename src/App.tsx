import React, { useState } from "react";
import style from "./App.module.scss";
import { Header, Tweets } from "components";
import { Subscribe } from "@react-rxjs/core";
import { tweetMap$ } from "./observables/tweetActions";

function App() {
    const [filterLiked, setFilterLiked] = useState(false);
    const toggleFilterLiked = () => setFilterLiked((filterLiked) => !filterLiked);

    return (
        <div className={style.app}>
            <Subscribe source$={tweetMap$}>
                <Header toggleFilterLiked={toggleFilterLiked} filterLiked={filterLiked} />
                <Tweets filterLiked={filterLiked} />
            </Subscribe>
        </div>
    );
}

export default App;
