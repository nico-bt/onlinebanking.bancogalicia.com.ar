import Login from "../components/Login"

function LoginPage() {
  return (
    <div className="container">
      <div className="col-1">
        <div className="logo">
          <a href="http://www.bancogalicia.com">
            <img src="/logo.png" alt="logo Galicia" height={42} />
          </a>
          <p className="dont-display-630">Online Banking</p>
        </div>

        <Login />
      </div>

      <div className="col-2">
        <p className="autor">
          GUILLERMO BASÍLICO
          <span className="titulo">Autóctono</span>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
