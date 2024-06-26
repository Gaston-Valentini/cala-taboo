import style from "./About.module.css";
import { useTranslation } from "react-i18next";
import Title from "../../components/Title/Title";
import Slider from "../../components/Slider/Slider";
import image1 from "../../assets/images/about/image-1.jpg";
import image2 from "../../assets/images/about/image-2.jpg";
import image3 from "../../assets/images/about/image-3.jpg";
import { useState, useEffect } from "react";

export default function About() {
    const { t } = useTranslation("global");
    const [gallery, setGallery] = useState(window.innerWidth <= 768);

    const handleResize = () => {
        setGallery(window.innerWidth <= 834);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className={style.container} id="about">
            <div className={style.content}>
                <Title text={t("about.title")} color={"dark"} />
                <p className={style.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis assumenda consequatur architecto voluptatum magnam
                    accusantium in voluptatibus explicabo! Impedit voluptas nam facilis maiores quisquam veniam atque officiis rerum sequi. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Velit nobis assumenda consequatur architecto voluptatum magnam accusantium in
                    voluptatibus explicabo! Impedit voluptas nam facilis maiores quisquam veniam atque officiis rerum sequi.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis assumenda consequatur architecto voluptatum magnam
                    accusantium in voluptatibus explicabo! Impedit voluptas nam facilis maiores quisquam veniam atque officiis rerum sequi.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis assumenda consequatur architecto voluptatum magnam
                    accusantium in voluptatibus explicabo! Impedit voluptas nam facilis maiores quisquam veniam atque officiis rerum sequi. Lorem
                    ipsum dolor sit amet consectetur adipisicing elit. Velit nobis assumenda consequatur architecto voluptatum magnam accusantium in
                    voluptatibus explicabo! Impedit voluptas nam facilis maiores quisquam veniam atque officiis rerum sequi.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nobis assumenda consequatur architecto voluptatum magnam
                    accusantium in voluptatibus explicabo! Impedit voluptas nam facilis maiores quisquam veniam atque officiis rerum sequi.
                </p>
                {!gallery ? (
                    <div className={style.images}>
                        <div className={style.imagesImage}>
                            <img src={image1} alt="Restaurante 1" />
                        </div>
                        <div className={style.imagesImage}>
                            <img src={image2} alt="Restaurante 2" />
                        </div>
                        <div className={style.imagesImage}>
                            <img src={image3} alt="Restaurante 3" />
                        </div>
                    </div>
                ) : (
                    <div className={style.imagesSlider}>
                        <Slider>
                            <div>
                                <img
                                    src={
                                        "https://cdn.sortiraparis.com/images/80/100789/834071-too-restaurant-too-hotel-paris-photos-menu-entrees.jpg"
                                    }
                                    alt="Restaurante 1"
                                />
                            </div>
                            <div>
                                <img
                                    src={"https://upload.wikimedia.org/wikipedia/commons/1/1d/Restaurant_in_The_Mus%C3%A9e_d%27Orsay.jpg"}
                                    alt="Restaurante 2"
                                />
                            </div>
                            <div>
                                <img
                                    src={"https://hips.hearstapps.com/hmg-prod/images/restaurantes-moda-madrid-ceferino-65aa5b0e3160a.jpeg"}
                                    alt="Restaurante 3"
                                />
                            </div>
                        </Slider>
                    </div>
                )}
            </div>
        </section>
    );
}
