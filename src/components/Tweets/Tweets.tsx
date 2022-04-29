import React from "react";
import { Tweet } from "components";
import { animated, config, useTransition } from "react-spring";
import { Spinner } from "components/Shared";
import style from "./Tweets.module.scss";
import { useTweets } from "../../hooks";

const Tweets = ({ filterLiked }: { filterLiked: boolean }) => {
    const tweets = useTweets();

    const tweetsToMap = filterLiked ? tweets.filter((tweet) => tweet.liked) : tweets;

    const tweetTransition = useTransition(tweetsToMap, {
        immediate: false,
        reverse: true,
        config: config.stiff,
        from: { opacity: 0, transform: "translate3d(0px, -25%, 0px)" },
        enter: { opacity: 1, transform: "translate3d(0px, 0px, 0px)" },
        leave: { opacity: 0, transform: "translate3d(0px, 25%, 0px)" },
        sort: (a, b) => (a.timestamp > b.timestamp ? -1 : 1),
        keys: tweetsToMap.map((tweet: any) => tweet.id),
    });

    return (
        <main className={style.tweets}>
            {tweetsToMap.length > 1 &&
                tweetTransition((styles, item) => (
                    <animated.div style={styles}>
                        <Tweet {...item} />
                    </animated.div>
                ))}
            {filterLiked && tweetsToMap.length === 0 && (
                <div className={style.zeroState}>
                    <h3>No tweets liked</h3>
                </div>
            )}
            {!filterLiked && tweetsToMap.length === 0 && <Spinner />}
        </main>
    );
};

export default Tweets;
