import { useState } from "react";
import style from "./MenuSubsection.module.css";
import { useTranslation } from "react-i18next";

export default function MenuSubsection({ subsection, subsectionIndex }) {
    const { t } = useTranslation("global");

    const [show, setSwhow] = useState(false);

    const onShow = () => {
        setSwhow(!show);
    };

    return (
        <div key={subsectionIndex} id={subsection.id} className={subsectionIndex % 2 !== 0 ? `${style.container} ${style.containerRight}` : style.container}>
            <div className={style.title}>
                <div className={style.titleImage}>
                    <img src={subsection.icon} />
                </div>
                <p className={style.titleText}>{t(subsection.title)}</p>
                <div className={style.titleImage}>
                    <img src={subsection.icon} />
                </div>
            </div>
            <p className={style.more} onClick={onShow}>
                {show ? t("menu.sections.less") : t("menu.sections.more")}
            </p>
            {show && (
                <div className={style.plates}>
                    {subsection.plates.map((plate, plateIndex) => (
                        <div key={plateIndex} className={style.platesPlate}>
                            <div className={style.platesPlateImage}>
                                <img src={plate.image} />
                            </div>
                            <div className={style.platesPlateData}>
                                <div className={style.platesPlateDataName}>
                                    <p>{t(plate.title)}</p>
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
