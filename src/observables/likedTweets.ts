import { BehaviorSubject } from "rxjs";

const likedTweets = new BehaviorSubject<string[]>([]);

export default likedTweets;
