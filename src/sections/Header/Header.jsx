import style from "./Header.module.css";
import logo from "../../assets/images/logos/logo.png";

export default function Header() {
    return (
        <section className={style.container}>
            <video className={style.video} autoPlay loop muted>
                <source src="https://videos.pexels.com/video-files/4124198/4124198-hd_1280_720_24fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className={style.overlay}>
                <div>
                    <img src={logo} className={style.logo} alt="Logo" />
                </div>
                <p className={style.slogan}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, necessitatibus?...</p>
            </div>
        </section>
    );
}
