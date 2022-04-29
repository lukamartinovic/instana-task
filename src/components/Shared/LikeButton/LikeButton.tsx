import style from "./LikeButton.module.scss";
import { ReactComponent as HeartIcon } from "assets/heart.svg";
import { ReactComponent as HeartIconActive } from "assets/heart-active.svg";

const LikeButton = ({ active }: { active: boolean }): JSX.Element => {
    return <div className={style.likeButton}>{active ? <HeartIconActive /> : <HeartIcon />}</div>;
};

export default LikeButton;
