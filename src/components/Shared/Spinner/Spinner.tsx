import style from "./Spinner.module.scss";

const Spinner = () => {
    return (
        <svg className={style.spinner} viewBox="0 0 50 50">
            <circle className="path" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
        </svg>
    );
};

export default Spinner;
