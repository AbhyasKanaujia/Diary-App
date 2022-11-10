import { useState, useEffect } from "react";
import { FaUserAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="heading">
        <h1>
          <FaUserAlt /> Login
        </h1>
      </section>
      <section className="from">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              value={email}
              className="form-control"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              value={password}
              className="form-control"
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

export default Login;
