import style from "./Contact.module.css";
import { useTranslation } from "react-i18next";
import Title from "../../components/Title/Title";
import { LuClock3 } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const { t } = useTranslation("global");

    const [canSubmit, setCanSubmit] = useState(false);
    const [form, setForm] = useState({
        message: "",
        name: "",
        email: "",
    });
    const formRef = useRef(null);
    const [confirmMessage, setConfirmMessage] = useState(0);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result);
                    setConfirmMessage(200);
                    setTimeout(() => {
                        setConfirmMessage(0);
                    }, 3000);
                },
                (error) => {
                    console.log(error);
                    setConfirmMessage(400);
                    setTimeout(() => {
                        setConfirmMessage(0);
                    }, 3000);
                }
            );
    };

    useEffect(() => {
        const allFieldsFilled = Object.values(form).every((value) => value.trim() !== "");
        setCanSubmit(allFieldsFilled);
    }, [form]);

    return (
        <section className={style.container}>
            <Title text={t("contact.title")} color={"dark"} />
            <div className={style.content}>
                <div className={style.data}>
                    <p className={style.dataTitle}>{t("contact.dataTitle")}</p>
                    <p className={style.dataText}>{t("contact.dataText")}</p>
                    <div className={style.dataInfo}>
                        <div className={style.dataInfoSection}>
                            <LuClock3 />
                            <div className={style.dataInfoSectionDays}>
                                <p>{t("contact.dataHoursWeek")}</p>
                                <p>{t("contact.dataHoursWeekend")}</p>
                            </div>
                        </div>
                        <div className={style.dataInfoSection}>
                            <FaLocationDot />
                            <p>Avda. Mariners de La Vila Joiosa 16 Villajoyosa | Alicante</p>
                        </div>
                        <div className={style.dataInfoSection}>
                            <MdAlternateEmail />
                            <p>calataboo@gmail.com</p>
                        </div>
                        <div className={style.dataInfoSection}>
                            <FaPhoneAlt />
                            <p>+34 632 79 42 64</p>
                        </div>
                    </div>
                </div>
                <form className={style.form} ref={formRef} onSubmit={handleSubmit}>
                    <textarea placeholder={t("contact.formMessage")} name="message" onChange={(e) => handleChange(e)} />
                    <input type="text" name="name" placeholder={t("contact.formName")} onChange={(e) => handleChange(e)} />
                    <input type="email" name="email" placeholder={t("contact.formEmail")} onChange={(e) => handleChange(e)} />
                    <input type="submit" value={t("contact.formSubmit")} className={style.formSubmit} disabled={!canSubmit} />
                    {confirmMessage === 200 && <p>{t("contact.confirmMessageOk")}</p>}
                    {confirmMessage === 400 && <p>{t("contact.confirmMessageBad")}</p>}
                </form>
            </div>
        </section>
    );
}
