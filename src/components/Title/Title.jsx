import style from "./Title.module.css";
import icon from "../../assets/images/icons/title-component.png";

export default function Title({ text }) {
    return (
        <div className={style.container}>
            <p className={style.text}>{text}</p>
            <div className={style.decorator}>
                <hr />
                <div className={style.decoratorIcon}>
                    <img src={icon} />
                </div>
                <hr />
            </div>
        </div>
    );
}
