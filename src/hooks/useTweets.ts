import { tweetMap$ } from "../observables/tweetActions";
import { bind } from "@react-rxjs/core";
import { TweetProps } from "../components/Tweet/Tweet.types";

const [useTweets] = bind<TweetProps[]>(tweetMap$, []);

export default useTweets;
