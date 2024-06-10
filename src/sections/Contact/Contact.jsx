import style from "./Contact.module.css";
import { useTranslation } from "react-i18next";
import Title from "../../components/Title/Title";

export default function Contact() {
    const { t } = useTranslation("global");

    return (
        <section className={style.container}>
            <Title text={t("contact.title")} />
        </section>
    );
}
