import { AuthProvider, AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";

// const {login} = useAuth

function Login() {
  const ctx = useContext(AuthContext);

  const handleFormSubmit = (e) => {
    const username = e.target[0].value;
    const password = e.target[1].value;
    e.preventDefault();
    console.log(username, password);
    console.log(ctx);
  };
  return (
    <form className="login-form" onSubmit={handleFormSubmit}>
      <h2 style={{ textAlign: "center" }}>
        LOGIN TO <br />
        ADMIN PANEL
      </h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
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
          {/* <h3>login or password is incorrect</h3> */}
        </div>
      </div>

      <button type="submit" className="outline pointer">
        <h3>login</h3>
      </button>
    </form>
  );
}

export default Login;
