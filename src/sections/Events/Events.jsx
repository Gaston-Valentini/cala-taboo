import style from "./Events.module.css";
import { useTranslation } from "react-i18next";
import Title from "../../components/Title/Title";
import { events } from "../../data/data";

export default function Events() {
    const { t } = useTranslation("global");

    return (
        <section className={style.container} id="events">
            <div className={style.overlay}>
                <Title text={t("events.title")} />
                <div className={style.events}>
                    {events.map((event, eventIndex) => (
                        <div key={eventIndex} className={style.eventsImage}>
                            <img src={event.image} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
