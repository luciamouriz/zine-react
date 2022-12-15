
import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import { Search } from "../search/Search"

export const Header = () => {
    return (
        <header>
            <div className="container-header">
                <Link to={"/"}>
                    <img className="logo" src={logo} alt="logo Zine" />
                </Link>
                <Search />
            </div>
        </header>
    )
}
