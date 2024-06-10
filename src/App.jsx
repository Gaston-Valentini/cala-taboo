import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./sections/Banner/Banner";
import About from "./sections/About/About";
import Events from "./sections/Events/Events";
import Menu from "./sections/Menu/Menu";

export default function App() {
    return (
        <div className={style.container}>
            <Navbar />
            <About />
            <Events />
            <Menu />
            <Banner />
        </div>
    );
}
