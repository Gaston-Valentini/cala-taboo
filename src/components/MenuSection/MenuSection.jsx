import { useState } from "react";
import style from "./MenuSection.module.css";
import { useTranslation } from "react-i18next";

export default function MenuSection({ section, sectionIndex }) {
    const { t } = useTranslation("global");

    const [show, setSwhow] = useState(false);

    const onShow = () => {
        setSwhow(!show);
    };

    return (
        <div key={sectionIndex} id={section.id} className={style.container}>
            <div className={style.title}>
                <div className={style.titleImage}>
                    <img src={section.icon} />
                </div>
                <p className={style.titleText}>{t(section.title)}</p>
                <div className={style.titleImage}>
                    <img src={section.icon} />
                </div>
            </div>
            <p className={style.more} onClick={onShow}>
                {show ? t("menu.moreActive") : t("menu.more")}
            </p>
            {show && (
                <div className={style.plates}>
                    {section.plates.map((plate, plateIndex) => (
                        <div key={plateIndex} className={style.platesPlate}>
                            <div className={style.platesPlateImage}>
                                <img src={plate.image} />
                            </div>
                            <div className={style.platesPlateData}>
                                <div className={style.platesPlateDataName}>
                                    <p>{t(plate.name)}</p>
                                    <hr />
                                    <span>{plate.price}</span>
                                </div>
                                <p className={style.platesPlateDataDescription}>{t(plate.description)}</p>
                                <div className={style.platesPlateDataAllergens}>
                                    {plate.allergens.map((allergen, index) => (
                                        <div className={style.platesPlateDataAllergensIcon} key={index}>
                                            <img src={allergen} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
