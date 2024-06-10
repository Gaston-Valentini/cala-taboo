import style from "./Menu.module.css";
import { useTranslation } from "react-i18next";
import Title from "../../components/Title/Title";
import MenuSection from "../../components/MenuSection/MenuSection";
import { menu, allergens } from "../../data/data";

export default function Menu() {
    const { t } = useTranslation("global");

    return (
        <section className={style.container} id="menu">
            <Title text={t("menu.title")} />
            <div className={style.navbar}>
                {menu.map((section, sectionIndex) => (
                    <a href={`#${section.id}`} key={sectionIndex} className={style.navbarLink}>
                        {t(section.title)}
                    </a>
                ))}
            </div>
            <div className={style.menu}>
                {menu.map((section, sectionIndex) => (
                    <MenuSection section={section} sectionIndex={sectionIndex} key={sectionIndex} />
                ))}
            </div>
            <div className={style.allergens}>
                <p className={style.allergensTitle}>{t("menu.allergensTitle")}</p>
                <div className={style.allergensList}>
                    {allergens.map((allergen, allergenIndex) => (
                        <div className={style.allergensListElement} key={allergenIndex} style={{ border: `2px solid ${allergen.color}` }}>
                            <div className={style.allergensListElementIcon}>
                                <img src={allergen.icon} />
                            </div>
                            <p className={style.allergensListElementText}>{t(allergen.text)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
