import style from "./Whatsapp.module.css";
import { useTranslation } from "react-i18next";
import { GiNotebook } from "react-icons/gi";

export default function Whatsapp() {
    const { t } = useTranslation("global");

    const onWhatsapp = () => {
        const phone = "+3463279264";
        const message = "¡Hola! Me gustaría recibir más información,\n mi nombre es: ";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
        window.open(url);
    };

    return (
        <div className={style.container} onClick={onWhatsapp}>
            <p className={style.text}>{t("whatsapp.text")}</p>
            <GiNotebook className={style.icon} />
        </div>
    );
}
