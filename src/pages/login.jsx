import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="login-form">
      <h2 style={{ textAlign: "center" }}>
        LOGIN TO <br />
        ADMIN PANEL
      </h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input type="text" placeholder="login" className="user-input"></input>
        <input
          type="password"
          placeholder="********"
          className="user-input"
        ></input>
        <div className="alert">
          {/* <h3>login or password is incorrect</h3> */}
        </div>
      </div>

      <NavLink to="/admin">
        <button className="outline pointer">
          <h3>login</h3>
        </button>
      </NavLink>
    </div>
  );
}

export default Login;
