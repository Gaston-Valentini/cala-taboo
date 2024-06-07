import style from "./Header.module.css";
import Slider from "../../components/Slider/Slider";

export default function Header() {
    return (
        <section className={style.container} id="home">
            <Slider>
                <div>
                    <img src={"https://img.freepik.com/foto-gratis/fondo-textura-hoja-verde_501050-120.jpg"} />
                </div>
                <div>
                    <img src={"https://img.freepik.com/fotos-premium/fondo-hojas-tropicales-verdes-ia-generativa_77417-3318.jpg"} />
                </div>
                <div>
                    <img
                        src={
                            "https://media.istockphoto.com/id/1221724425/es/foto/hojas-verdes-para-fondo-y-fondo-de-pantalla.jpg?s=612x612&w=0&k=20&c=nYc75-mM2lQY7NI69Z_-6MjHLUv6T7gvQYvO4fE35tA="
                        }
                    />
                </div>
            </Slider>
        </section>
    );
}
