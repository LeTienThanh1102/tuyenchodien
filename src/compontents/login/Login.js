import { useNavigate } from "react-router-dom";
import "./login.scss";
import { useState } from "react";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(username, password);
    fetch(`http://localhost:5001/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message === "Login successful") {
          console.log(data);
          const key = "myKey";
          const value = data.user;
          localStorage.setItem(key, value);
          navigate("/trangchu");
        } else {
          setError("Invalid username or password");
          setUsername("");
          setPassword("");
        }
      })
      .catch((error) => {
        setError("An error occurred");
      });
  };
  return (
    <div className="loginn">
      <div className="login-table">
        <div className="login_contaniner">
          <div className="login-header">
            <p className="login_name active">Đăng nhập</p>
          </div>
          <form className="login__acc-content" method="POST">
            <input
              type="text"
              value={username}
              className="login__acc-input"
              placeholder="Tên đăng nhập hoặc Email"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              value={password}
              className="login__acc-input"
              placeholder="Mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login_btn" onClick={handleLogin}>
              Đăng nhập
            </button>
            {error && <p className="error-message">Lỗi: {error}</p>}
          </form>
          <p className="login-help">
            Chúng tôi không sử dụng thông tin của bạn với bất kỳ mục đích nào.
            Bằng cách đăng nhập hoặc đăng ký, bạn đồng ý với
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
