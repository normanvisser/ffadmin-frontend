import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { loginUser } from "../../store/user/thunks";
import { selectToken } from "../../store/user/selectors";
import logoFc from "./fc-logo-login.jpg";

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector(selectToken);
  console.log(token);

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(loginUser(email, password));
    setEmail("");
    setPassword("");
  };

  token && navigate("/students");

  return (
    <div className="login-div">
      {/* {token ? <p>Loggend in</p> : <></>} */}
      <form className="login-form" onSubmit={submitForm}>
        <img
          src={logoFc}
          alt="logo-fairfield-college"
          className="login-page-logo"
        />
        <label>Email</label>
        <input
          className="form-input"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="form-input"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="button button-primary button-login-page"
        >
          Log In
        </button>
      </form>
    </div>
  );
}
