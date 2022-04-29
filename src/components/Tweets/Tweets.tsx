import React from "react";
import { Tweet } from "components";
import { useTweets } from "hooks";

export const Tweets = () => {
    const tweets = useTweets();
    return (
        <main>
            {tweets
                .slice(0)
                .reverse()
                .map((tweet) => (
                    <Tweet {...tweet} key={tweet.id} />
                ))}
        </main>
    );
};
