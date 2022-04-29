import style from "./Tweet.module.scss";
import { TweetProps } from "./Tweet.types";
import pfp from "assets/pfp.png";
import { LikeButton } from "components/Shared";
import likedTweets from "../../observables/likedTweets";

const Tweet = ({ account, timestamp, content, id, liked }: TweetProps): JSX.Element => {
    const handle = account.split(" ").join("").toLowerCase();
    const age = Math.round((Date.now() - +timestamp) / 1000) + "s";

    const handleLike = () => {
        likedTweets.next([...likedTweets.getValue(), id]);
    };

    return (
        <article className={style.tweet}>
            <aside>
                <img src={pfp} alt="profile picture" />
            </aside>
            <main>
                <div>
                    <strong>{account}</strong>
                    <small>@{handle}</small>
                    <small>{age}</small>
                </div>
                <div>
                    <p>{content}</p>
                </div>
                <div className={style.buttons}>
                    <LikeButton onClick={handleLike} active={liked} />
                </div>
            </main>
        </article>
    );
};

export default Tweet;
