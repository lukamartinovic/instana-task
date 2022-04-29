import style from "./Switch.module.scss";

const Switch = ({ value, onChange }: { value: boolean; onChange: () => void }) => {
    return (
        <label className={style.switch}>
            <input type="checkbox" checked={value} onChange={onChange} />
            <span className={style.slider} />
        </label>
    );
};

export default Switch;
