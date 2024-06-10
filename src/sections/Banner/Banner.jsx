import style from "./Banner.module.css";
import { useTranslation } from "react-i18next";
import Slider from "../../components/Slider/Slider";
import image1 from "../../assets/images/slider/image-1.jpg";
import image2 from "../../assets/images/slider/image-2.jpg";
import image3 from "../../assets/images/slider/image-3.jpg";
import image4 from "../../assets/images/slider/image-4.jpg";
import image5 from "../../assets/images/slider/image-5.jpg";
import image6 from "../../assets/images/slider/image-6.jpg";
import image7 from "../../assets/images/slider/image-7.jpg";
import image8 from "../../assets/images/slider/image-8.jpg";
import image9 from "../../assets/images/slider/image-9.jpg";

export default function Banner() {
    const { t } = useTranslation("global");

    return (
        <section className={style.container} id="home">
            <Slider>
                <div className={style.slide} style={{ backgroundImage: `url(${image1})` }}>
                    <div className={style.slideOverlay}>
                        <p className={style.slideText}>{t("slider.slideOne")}</p>
                    </div>
                </div>
                <div className={style.slide} style={{ backgroundImage: `url(${image2})` }}>
                    <div className={style.slideOverlay}>
                        <p className={style.slideText}>{t("slider.slideTwo")}</p>
                    </div>
                </div>
                <div className={style.slide} style={{ backgroundImage: `url(${image3})` }}>
                    <div className={style.slideOverlay}>
                        <p className={style.slideText}>{t("slider.slideThree")}</p>
                    </div>
                </div>
                <div className={style.slide} style={{ backgroundImage: `url(${image4})` }}>
                    <div className={style.slideOverlay}>
                        <p className={style.slideText}>{t("slider.slideFour")}</p>
                    </div>
                </div>
                <div className={style.slide} style={{ backgroundImage: `url(${image5})` }}>
                    <div className={style.slideOverlay}>
                        <p className={style.slideText}>{t("slider.slideFive")}</p>
                    </div>
                </div>
                <div className={style.slide} style={{ backgroundImage: `url(${image6})` }}>
                    <div className={style.slideOverlay}>
                        <p className={style.slideText}>{t("slider.slideSix")}</p>
                    </div>
                </div>
                <div className={style.slide} style={{ backgroundImage: `url(${image7})` }}>
                    <div className={style.slideOverlay}>
                        <p className={style.slideText}>{t("slider.slideSeven")}</p>
                    </div>
                </div>
                <div className={style.slide} style={{ backgroundImage: `url(${image8})` }}>
                    <div className={style.slideOverlay}>
                        <p className={style.slideText}>{t("slider.slideEight")}</p>
                    </div>
                </div>
                <div className={style.slide} style={{ backgroundImage: `url(${image9})` }}>
                    <div className={style.slideOverlay}>
                        <p className={style.slideText}>{t("slider.slideNine")}</p>
                    </div>
                </div>
            </Slider>
        </section>
    );
}
