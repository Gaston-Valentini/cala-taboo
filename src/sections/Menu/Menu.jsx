import style from "./Menu.module.css";
import { useTranslation } from "react-i18next";
import Title from "../../components/Title/Title";
import MenuSubsection from "../../components/MenuSubsection/MenuSubsection";
import { menu, allergens } from "../../data/data";

export default function Menu() {
    const { t } = useTranslation("global");

    return (
        <section className={style.container} id="menu">
            <Title text={t("menu.title")} />
            <div className={style.navbar}>
                {menu[0].subsections.map((subsection, subsectionIndex) => (
                    <a className={style.navbarLink} href="#" key={subsectionIndex}>
                        {t(subsection.title)}
                    </a>
                ))}
                {menu[1].subsections.map((subsection, subsectionIndex) => (
                    <a className={style.navbarLink} href="#" key={subsectionIndex}>
                        {t(subsection.title)}
                    </a>
                ))}
            </div>
            <div className={style.menu}>
                {menu.map((section, sectionIndex) => (
                    <div className={style.menuSection} key={sectionIndex}>
                        <div className={style.menuSectionTitle}>{t(section.title)}</div>
                        <div className={style.menuSectionSubsections}>
                            {section.subsections.map((subsection, subsectionIndex) => (
                                <MenuSubsection key={subsectionIndex} subsection={subsection} subsectionIndex={subsectionIndex} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className={style.allergens}>
                <p className={style.allergensTitle}>{t("menu.allergens.title")}</p>
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
