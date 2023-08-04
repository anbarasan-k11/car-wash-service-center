import { useEffect, useState } from "react";
import { React } from "react";
import { Managerlogin } from "../validation";
export const ManagerLogin = () => {
  const [issubmit, setissubmit] = useState(false);
  let [array, setarray] = useState([]);
  let [inputdata, setinputdata] = useState({
    username: "",
    password: "",
  });
  let [error, seterror] = useState({});
  useEffect(() => {
    if (Object.keys(error).length === 0 && issubmit) {
      window.location.href = "/dashbord";
    }
  }, [error]);

  const data = (e) => {
    setinputdata({ ...inputdata, [e.target.name]: e.target.value });
  };
  let { name, username, emailid, password } = inputdata;
  function Submit(e) {
    setarray([...array, { name, username, emailid, password }]);
    setissubmit(true);
    e.preventDefault();
    seterror(Managerlogin(inputdata));
  }

  return (
    <div className="App">
      <div style={{ marginLeft: -560 }}>
        <h1 id="h1">WELCOME MANAGER</h1>
        <h2 id="h1"> PLEASE LOGIN TO CONTINUE</h2>
      </div>

      <br />
      <form
        id="form2"
        style={{
          marginright: 180,
          marginleft: 150,
          width: 580,
          backgroundimage: "linear-gradient(90deg, #00ccff, #bb44ff)",
        }}
        onSubmit={Submit}
      >
        <div id="form">
          <div id="logo"></div>
          <br />
          <div>
            <div id="div1" class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                username
              </span>
              <input
                type="text"
                class="form-control"
                name="username"
                onChange={data}
                placeholder="enter user name"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            {error.username && <p style={{ color: "red" }}>{error.username}</p>}
            <div id="div2" class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                password
              </span>
              <input
                type="password"
                class="form-control"
                name="password"
                onChange={data}
                placeholder="enter user password"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            {error.password && <p style={{ color: "red" }}>{error.password}</p>}
            <button type="submit" id="submit">
              LOGIN
            </button>
            <br />
            <br />
          </div>
        </div>
      </form>
      <br />
    </div>
  );
};
