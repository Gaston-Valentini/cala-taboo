import style from "./Map.module.css";
import { useTranslation } from "react-i18next";
import MapComponent from "../../components/MapComponent/MapComponent";

export default function Map() {
    const { t } = useTranslation("global");

    return (
        <section className={style.container}>
            <MapComponent />
            <div className={style.link}>
                <a
                    href="https://www.google.es/maps/place/Cala+Taboo+Restaurante+Beach+Club/@38.5250437,-0.1710591,17z/data=!3m1!4b1!4m6!3m5!1s0xd621b5a98b15eb1:0xbf22998c74f73316!8m2!3d38.5250437!4d-0.1684788!16s%2Fg%2F11rqz061mz?hl=es&entry=ttu"
                    target="_blank"
                >
                    {t("map.link")}
                </a>
            </div>
        </section>
    );
}
