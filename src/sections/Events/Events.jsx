import style from "./Events.module.css";
import { useTranslation } from "react-i18next";
import Title from "../../components/Title/Title";
import Slider from "../../components/Slider/Slider";
import { events } from "../../data/data";
import { useEffect, useState } from "react";

export default function Events() {
    const { t } = useTranslation("global");

    const [size, setSize] = useState(window.innerWidth);

    const handleResize = () => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className={style.container} id="events">
            <div className={style.overlay}>
                <Title text={t("events.title")} />
                {size <= 480 ? (
                    <Slider>
                        {events.map((event, eventIndex) => (
                            <div key={eventIndex} className={style.eventsImage}>
                                <img src={event.image} />
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className={style.events}>
                        {events.map((event, eventIndex) => (
                            <div key={eventIndex} className={style.eventsImage}>
                                <img src={event.image} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
