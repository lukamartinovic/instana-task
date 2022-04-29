import { map, scan, Subject } from "rxjs";
import { mergeWithKey } from "@react-rxjs/utils";
import { nanoid } from "nanoid";
import tweets from "./tweets";
import { TweetProps } from "../components/Tweet/Tweet.types";

const clearTweets$ = new Subject();
export const onClear = () => clearTweets$.next(true);

const likeTweet$ = new Subject();
export const onLike = (id: string) => likeTweet$.next(id);

const tweetActions$ = mergeWithKey({
    clear: clearTweets$.pipe(map((clear) => clear)),
    addTweet: tweets.pipe(map((tweet) => ({ ...tweet, id: nanoid() }))),
    like: likeTweet$.pipe(map((id) => ({ id }))),
});

export const tweetMap$ = tweetActions$.pipe(
    scan((state: any, action) => {
        switch (action.type) {
            case "addTweet":
                return [...state, { ...action.payload }].filter(
                    (tweet) => Date.now() - tweet.timestamp < 30000
                );
            case "clear":
                return [];
            case "like":
                return [...state].map((tweet: TweetProps) =>
                    tweet.id === action.payload.id ? { ...tweet, liked: !tweet.liked } : tweet
                );
        }
    }, [])
);
