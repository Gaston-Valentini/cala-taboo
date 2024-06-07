import style from "./Menu.module.css";
import { useTranslation } from "react-i18next";
import Title from "../../components/Title/Title";
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
                    <div key={sectionIndex} id={section.id} className={style.menuSection}>
                        <div className={style.menuSectionTitle}>
                            <div className={style.menuSectionTitleImage}>
                                <img src={section.icon} />
                            </div>
                            <p className={style.menuSectionTitleText}>{t(section.title)}</p>
                            <div className={style.menuSectionTitleImage}>
                                <img src={section.icon} />
                            </div>
                        </div>
                        <div className={style.menuSectionPlates}>
                            {section.plates.map((plate, plateIndex) => (
                                <div key={plateIndex} className={style.menuSectionPlatesPlate}>
                                    <div className={style.menuSectionPlatesPlateImage}>
                                        <img src={plate.image} />
                                    </div>
                                    <div className={style.menuSectionPlatesPlateData}>
                                        <div className={style.menuSectionPlatesPlateDataName}>
                                            <p>{t(plate.name)}</p>
                                            <hr />
                                            <span>{plate.price}</span>
                                        </div>
                                        <p className={style.menuSectionPlatesPlateDataDescription}>{t(plate.description)}</p>
                                        <div className={style.menuSectionPlatesPlateDataAllergens}>
                                            {plate.allergens.map((allergen, index) => (
                                                <div className={style.menuSectionPlatesPlateDataAllergensIcon} key={index}>
                                                    <img src={allergen} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
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
