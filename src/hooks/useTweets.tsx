import { bind } from "@react-rxjs/core";
import { combineLatestWith, map, scan } from "rxjs";
import { nanoid } from "nanoid";
import { TweetProps } from "../components/Tweet/Tweet.types";
import { filterLikedToggle, likedTweets, tweets } from "../observables";

const [useTweets] = bind(
    tweets.pipe(
        map((tweet) => ({ ...tweet, id: nanoid(), liked: false })),
        scan((tweets: TweetProps[], tweet) => [...tweets, tweet], []),
        map((tweets: TweetProps[]) =>
            tweets.filter((tweet) => Date.now() - +tweet.timestamp < 30000)
        ),
        combineLatestWith(likedTweets),
        map(([tweets, likedTweets]) => {
            return tweets.map((tweet) => ({ ...tweet, liked: likedTweets.includes(tweet.id) }));
        }),
        combineLatestWith(filterLikedToggle),
        map(([tweets, filterLikedToggle]) =>
            filterLikedToggle ? tweets.filter((tweet) => tweet.liked) : tweets
        )
    ),
    []
);

export default useTweets;
