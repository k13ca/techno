import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { useContext, useState, useEffect } from "react";

//ZEBY SIE NIE DALO WEJSC DO /ADMIN PRZEZ WPISANIE WPRZEGLADARKE

function Login() {
  const [notValid, setNotValid] = useState(false);
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    const username = e.target[0].value;
    const password = e.target[1].value;
    e.preventDefault();
    ctx.login(username, password);

    if (!ctx.isLogged) {
      setNotValid(true);
      return;
    }

    // navigate("/admin");
  };

  useEffect(() => {
    if (ctx.isLogged) {
      navigate("/admin");
    }
  }, [ctx.isLogged]);

  return (
    <form className="login-form" onSubmit={handleFormSubmit}>
      <h2 style={{ textAlign: "center" }}>
        LOGIN TO <br />
        ADMIN PANEL
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          onChange={() => setNotValid(false)}
          type="text"
          placeholder="login"
          className="user-input"
          name="login"
          required
        ></input>
        <input
          type="password"
          placeholder="********"
          className="user-input"
          name="password"
          required
        ></input>
        <div className="alert">
          {notValid && <h3>login or password is incorrect</h3>}
        </div>
      </div>

      <button type="submit" className="outline pointer">
        <h3>login</h3>
      </button>
    </form>
  );
}

export default Login;
