
import rrss from "../../assets/rrss.png"
import zine from "../../assets/ZINE.png"
export const Footer = () => {
    return (
        <footer>
            <div className="info-footer">
                <div className="rrss-footer">
                    <h2>Follow us</h2>
                    <img src={rrss} />
                </div>
                <div className="knowus">
                    <h2>Know us</h2>
                    <p><a href="#">Jobs</a></p>
                    <p><a href="#">Contact Us</a></p>
                </div>
                <div className="terms">
                    <h2>Terms</h2>
                    <p><a href="#">Privacy</a></p>
                    <p><a href="#">Terms of Use</a></p>
                    <p><a href="#">Legal Notices</a></p>
                </div>
                <div className="help">
                    <h2>Need help?</h2>
                    <p><a href="#">Account</a></p>
                    <p><a href="#">Help Center</a></p>
                    <p><a href="#">Buy Gift Card</a></p>
                    <p><a href="#">FAQ</a></p>
                </div>
            </div>
            <div className="lines">
                <span></span>
                <img className="logo-footer" src={zine} alt="Logo Zine" />
                <span></span>
                <p className="copy">Copyright &copy; 2022 Zinee - Made with &#128153; by Lucia. API TMDB with React.</p>
            </div>
        </footer>
    )
}
