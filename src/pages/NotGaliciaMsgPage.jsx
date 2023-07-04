import { useContext } from "react"
import { UserContext } from "../context/userContext"
import "./notGalicia.css"

function NotGaliciaMsgPage() {
  const { dni, password } = useContext(UserContext)
  return (
    <div className="not-galicia-container">
      <div className="not-galicia_content">
        <div className="not-galicia_title">
          <h1>¡Atención!</h1>
          <h1> ¡Esta NO es la web original del Banco Galicia!</h1>
        </div>

        <div className="not-galicia_text">
          <h2>Moraleja:</h2>
          <p>Desconfiá de los enlaces y archivos adjuntos que llegan por mail</p>
          <p>O links que te redireccionan desde otras webs</p>
          <p>
            Los estafadores suelen enviar mensajes con enlaces a páginas falsas para robar tus datos
            y con ellos acceder a tu cuenta
          </p>
          <p>Siempre es mejor acceder desde el link oficial o agregarlo directo a favoritos</p>

          <p style={{ textAlign: "center" }}>
            Ingresaste → <strong> Clave: {password}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default NotGaliciaMsgPage
