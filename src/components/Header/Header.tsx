import React from "react";
import style from "./Header.module.scss";
import { ReactComponent as Logo } from "assets/logo.svg";
import { onClear } from "../../observables/tweetActions";
import { useTweets } from "hooks";
import { Switch } from "components/Shared";

const Header = ({
    toggleFilterLiked,
    filterLiked,
}: {
    toggleFilterLiked: () => void;
    filterLiked: boolean;
}): JSX.Element => {
    const tweets = useTweets();

    const handleClear = () => onClear();

    const likedCount = tweets.filter((tweet: any) => tweet.liked).length;

    return (
        <header className={style.header}>
            <Logo />
            <button onClick={handleClear}>Clear feed</button>
            <span>
                All tweets
                <Switch value={filterLiked} onChange={toggleFilterLiked} />
                Liked tweets {likedCount ? ` (${likedCount})` : ""}{" "}
            </span>
        </header>
    );
};

export default Header;
