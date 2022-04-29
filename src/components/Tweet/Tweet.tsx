import style from "./Tweet.module.scss";
import { TweetProps } from "./Tweet.types";
import pfp from "assets/pfp.png";

const Tweet = ({ account, timestamp, content }: TweetProps): JSX.Element => {
    const handle = account.split(" ").join("").toLowerCase();

    return (
        <article className={style.tweet}>
            <aside>
                <img src={pfp} />
            </aside>
            <main>
                <div>
                    <strong>{account}</strong>
                    <small>@{handle}</small>
                </div>
                <div>
                    <p>{content}</p>
                </div>
                <div>buttons</div>
            </main>
        </article>
    );
};

export default Tweet;
