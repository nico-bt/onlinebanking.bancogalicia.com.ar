import KeyboardIcon from "@mui/icons-material/Keyboard"
import { IconButton, InputAdornment, TextField } from "@mui/material"
import { useContext, useState } from "react"
import Links from "./Links"
import Footer from "./Footer"
import { Visibility, VisibilityOff } from "@mui/icons-material"
import { useLocation } from "wouter"
import { UserContext } from "../context/userContext"

function Login() {
  const { dni, setDni, password, setPassword } = useContext(UserContext)
  const [location, setLocation] = useLocation()

  const [usuarioGalicia, setUsuarioGalicia] = useState("")

  const [showUser, setShowUser] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const [userIconVisible, setUserIconVisible] = useState(false)
  const [passwordIconVisible, setUserPasswordIconVisible] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleClickShowUser = () => setShowUser((show) => !show)

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const handleMouseOverUser = () => {
    setUserIconVisible((prev) => !prev)
  }
  const handleMouseOverPassword = () => {
    setUserPasswordIconVisible((prev) => !prev)
  }

  function handleSubmit(e) {
    e.preventDefault()

    setLocation("/notgalicia")
  }

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit} autoComplete="new-password">
        <h1 className="login-title dont-display-630">Iniciar sesión</h1>

        <TextField
          autoFocus
          id="standard-basic"
          label="Tu DNI"
          variant="standard"
          className="input"
          color="warning"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          InputLabelProps={{ shrink: !!dni }}
        />

        <TextField
          autoComplete="new-password"
          id="usuario-galicia"
          label="Tu usuario Galicia"
          variant="standard"
          className="input"
          color="warning"
          type={showUser ? "text" : "password"}
          value={usuarioGalicia}
          onChange={(e) => setUsuarioGalicia(e.target.value)}
          onMouseEnter={handleMouseOverUser}
          onMouseLeave={handleMouseOverUser}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {userIconVisible && (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowUser}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showUser ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />

        <TextField
          autoComplete="new-password"
          id="password"
          label="Tu clave Galicia"
          variant="standard"
          className="input"
          color="warning"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onMouseEnter={handleMouseOverPassword}
          onMouseLeave={handleMouseOverPassword}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                {passwordIconVisible && (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />

        <div className="checkbox checkbox-primary">
          <input
            name="RememberMe"
            id="RememberMe"
            type="checkbox"
            style={{ height: 18, width: 18 }}
          />
          <label htmlFor="RememberMe">Recordar DNI y Usuario</label>
        </div>

        <div className="checkbox checkbox-primary dont-display-630">
          <KeyboardIcon />
          <label htmlFor="teclado">Teclado virtual</label>
        </div>

        <button className="btn" disabled={!dni || !usuarioGalicia || !password}>
          INICIAR SESIÓN
        </button>
      </form>

      <Links />
      <Footer />
    </>
  )
}

export default Login
