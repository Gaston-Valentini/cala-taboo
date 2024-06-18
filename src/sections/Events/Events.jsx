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
                    <div className={style.events}>
                        <div className={style.eventsFeatured}>
                            <p className={style.eventsFeaturedTitle}>{t("events.featuredTitle")}</p>
                            <div style={{ boxShadow: "0 0 5px 3px var(--lightBrown)", display: "grid" }}>
                                <Slider>
                                    {events.featured.map((event, eventIndex) => (
                                        <div key={eventIndex} className={style.eventsImage}>
                                            <img src={event.image} />
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                        <div className={style.eventsWeekly}>
                            <p className={style.eventsWeeklyTitle}>{t("events.weeklyTitle")}</p>
                            <div className={style.eventsWeeklyList}>
                                {events.weekly.map((event, eventIndex) => (
                                    <div key={eventIndex} className={style.eventsWeeklyListElement}>
                                        <img src={event.image} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={style.events}>
                        <div className={style.eventsFeatured}>
                            <p className={style.eventsFeaturedTitle}>{t("events.featuredTitle")}</p>
                            <div className={style.eventsFeaturedList}>
                                {events.featured.map((event, eventIndex) => (
                                    <div key={eventIndex} className={style.eventsFeaturedListElement}>
                                        <img src={event.image} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={style.eventsWeekly}>
                            <p className={style.eventsWeeklyTitle}>{t("events.weeklyTitle")}</p>
                            <div className={style.eventsWeeklyList}>
                                {events.weekly.map((event, eventIndex) => (
                                    <div key={eventIndex} className={style.eventsWeeklyListElement}>
                                        <img src={event.image} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
