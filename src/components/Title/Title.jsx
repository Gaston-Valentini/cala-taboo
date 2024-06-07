import style from "./Title.module.css";
import icon from "../../assets/images/icons/title-component.png";

export default function Title({ text, color }) {
    const textDark = {
        color: "var(--brown)",
    };
    const textLight = {
        color: "var(--lightBrown)",
    };
    const hrDark = {
        backgroundColor: "var(--brown)",
    };
    const hrLight = {
        backgroundColor: "var(--lightBrown)",
    };
    const imageDark = {
        filter: "invert(14%) sepia(100%) saturate(100%) hue-rotate(324deg)",
    };
    const imageLight = {
        filter: "invert(100%) ",
    };

    return (
        <div className={style.container}>
            <p className={style.text} style={color === "dark" ? textDark : textLight}>
                {text}
            </p>
            <div className={style.decorator}>
                <hr style={color === "dark" ? hrDark : hrLight} />
                <div className={style.decoratorIcon}>
                    <img src={icon} style={color === "dark" ? imageDark : imageLight} />
                </div>
                <hr style={color === "dark" ? hrDark : hrLight} />
            </div>
        </div>
    );
}
