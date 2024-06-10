import style from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./sections/Header/Header";
import Banner from "./sections/Banner/Banner";
import About from "./sections/About/About";
import Events from "./sections/Events/Events";
import Menu from "./sections/Menu/Menu";

export default function App() {
    return (
        <div className={style.container}>
            <Navbar />
            <Header />
            <About />
            <Events />
            <Menu />
            <Banner />
        </div>
    );
}
