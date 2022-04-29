import style from "./LikeButton.module.scss";
import { ReactComponent as HeartIcon } from "assets/heart.svg";
import { ReactComponent as HeartIconActive } from "assets/heart-active.svg";

const LikeButton = ({
    active,
    onClick = () => {},
}: {
    active: boolean;
    onClick: () => void;
}): JSX.Element => {
    return (
        <button className={style.likeButton}>
            <div onClick={onClick}>{active ? <HeartIconActive /> : <HeartIcon />}</div>
        </button>
    );
};

export default LikeButton;
