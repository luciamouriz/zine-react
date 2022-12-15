
import logo from "../../assets/logo.png"
import { CardFront } from "../cardfront/CardFront"
import { Search } from "../search/Search"

export const Header = () => {
    return (
        <header>
            <div className="container-header">
                <a href="index.html">
                    <img className="logo" src={logo} alt="logo Zine" />
                </a>
                <Search />
            </div>

            <CardFront />
        </header>
    )
}
