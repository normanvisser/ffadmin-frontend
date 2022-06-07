import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import "./styles.css";
import { loginUser } from "../../store/user/thunks";
import { selectToken } from "../../store/user/selectors";
export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const token = useSelector(selectToken);

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(loginUser(email, password));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="login-div">
      {token ? <p>Loggend in</p> : <></>}
      <form className="login-form" onSubmit={submitForm}>
        <label>Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
