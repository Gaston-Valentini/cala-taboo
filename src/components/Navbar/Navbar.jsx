import style from "./Navbar.module.css";
import { useTranslation } from "react-i18next";
import logo from "../../assets/images/logos/logo.png";
import { IoMdClose } from "react-icons/io";
import flagSpain from "../../assets/images/flags/flag-spain.png";
import flagEngland from "../../assets/images/flags/flag-england.png";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

export default function Navbar() {
    const [t, i18n] = useTranslation("global");
    const [language, setLanguage] = useState("es");
    const [menu, setMenu] = useState(false);

    const onLanguage = (e) => {
        const { value } = e.target;
        i18n.changeLanguage(value);
        setLanguage(value);
    };

    const onMenu = () => {
        setMenu(!menu);
    };

    return (
        <nav className={style.container}>
            <div className={style.logo}>
                <img src={logo} />
            </div>
            <div className={menu ? `${style.overlay} ${style.overlayActive}` : style.overlay}>
                <ul className={menu ? `${style.links} ${style.linksActive}` : style.links}>
                    <IoMdClose className={style.linksClose} onClick={onMenu} />
                    <li className={style.linksLink}>
                        <a href="#home" onClick={onMenu}>
                            {t("navbar.linkOne")}
                        </a>
                    </li>
                    <li className={style.linksLink}>
                        <a href="#about" onClick={onMenu}>
                            {t("navbar.linkTwo")}
                        </a>
                    </li>
                    <li className={style.linksLink}>
                        <a href="#events" onClick={onMenu}>
                            {t("navbar.linkThree")}
                        </a>
                    </li>
                    <li className={style.linksLink}>
                        <a href="#menu" onClick={onMenu}>
                            {t("navbar.linkFour")}
                        </a>
                    </li>
                    <li className={style.linksLink}>
                        <a href="#contact" onClick={onMenu}>
                            {t("navbar.linkFive")}
                        </a>
                    </li>
                </ul>
            </div>
            <div className={style.buttons}>
                <div className={style.buttonsLanguage}>
                    <div className={style.buttonsLanguageFlag}>
                        {language === "es" && <img src={flagSpain} />}
                        {language === "en" && <img src={flagEngland} />}
                    </div>
                    <select className={style.buttonsLanguageSelector} onChange={(e) => onLanguage(e)}>
                        <option hidden>{t("navbar.language")}</option>
                        {language !== "es" && <option value="es">{t("navbar.spanish")}</option>}
                        {language !== "en" && <option value="en">{t("navbar.english")}</option>}
                    </select>
                </div>
                <FaBars className={style.buttonsBars} onClick={onMenu} />
            </div>
        </nav>
    );
}
