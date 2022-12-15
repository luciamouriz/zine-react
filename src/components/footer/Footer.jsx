
import rrss from "../../assets/rrss.png"
import zine from "../../assets/ZINE.png"
export const Footer = () => {
    return (
        <footer>
            <div className="info-footer">
                <div className="rrss-footer">
                    <h2>Siguenos</h2>
                    <img src={rrss}/>
                </div>
                <div className="conocenos">
                    <h2>Conocenos</h2>
                    <p><a href="#">Trabaja con nosotros</a></p>
                    <p><a href="#">Contactanos</a></p>
                </div>
                <div className="condiciones">
                    <h2>Condiciones</h2>
                    <p><a href="#">Privacidad</a></p>
                    <p><a href="#">Términos de uso</a></p>
                    <p><a href="#">Avisos legales</a></p>
                </div>
                <div className="ayuda">
                    <h2>¿Necesitas ayuda?</h2>
                    <p><a href="#">Cuenta</a></p>
                    <p><a href="#">Centro de ayuda</a></p>
                    <p><a href="#">Canjea Tarjeta Regalo</a></p>
                    <p><a href="#">Preguntas frecuentes</a></p>
                </div>
            </div>
            <div className="lineas">
                <span></span>
                <img className="logo-footer" src={zine} alt="Logo Zine"/>
                    <span></span>
                    <p className="copy">Copyright &copy; 2022 Zine - Todos los derechos reservados. API TMDB.</p>
            </div>
        </footer>
  )
}
