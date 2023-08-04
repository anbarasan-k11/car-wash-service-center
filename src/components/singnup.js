import React, { useEffect } from "react";
import { Link, json } from "react-router-dom";
import { useState } from "react";
import { Validation } from "./validation";
export default function ChildComponent({ onDataReceived }) {
  const [array, setArray] = useState({});
  const [issubmit, setissubmit] = useState(false);
  const [inputdata, setinputdata] = useState({
    name: "",
    username: "",
    emailid: "",
    password: "",
  });
  sessionStorage.setItem("checkdata", JSON.stringify(inputdata));
  const [error, seterror] = useState({});

  const data = (e) => {
    setinputdata({ ...inputdata, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (Object.keys(error).length === 0 && issubmit) {
      window.location.href = "/dashbord";
      const newElement = inputdata;
      storedArray.push(newElement);
      sessionStorage.setItem("myArray", JSON.stringify(storedArray));
    }
  }, [error]);
  const storedArray = JSON.parse(sessionStorage.getItem("myArray")) || [];
  const HandleClick = (e) => {
    // if (sessionStorage.getItem("userData" == null)) {
    //   sessionStorage.setItem("userData", []);
    // }
    e.preventDefault();
    seterror(Validation(inputdata));
    setissubmit(true);
  };

  const sendDataToParent = () => {
    onDataReceived(inputdata);
  };
  return (
    <div className="App">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h2 id="h1" style={{ color: "greenyellow", paddingTop: 20 }}>
            {" "}
            REGISTRATION FORM
          </h2>
        </div>
      </div>
      <br />
      <br />
      <form id="style" onSubmit={HandleClick}>
        <div id="form">
          <div id="logo"></div>
          <div>
            <div id="div3" class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                name
              </span>
              <input
                type="text"
                name="name"
                value={inputdata.name || ""}
                onChange={data}
                class="form-control"
                placeholder="enter a name"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            {error.name && <p style={{ color: "red" }}>{error.name}</p>}
          </div>
          <div>
            <div id="div1" class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm-3">
                username
              </span>
              <input
                type="text"
                name="username"
                value={inputdata.username || ""}
                placeholder="enter user name"
                onChange={data}
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            {error.username && <p style={{ color: "red" }}>{error.username}</p>}
          </div>
          <div id="div4">
            <div id="div4" class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                emailid
              </span>
              <input
                type="text"
                name="emailid"
                value={inputdata.emailid || ""}
                placeholder="enter a email address"
                onChange={data}
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            <br></br>
          </div>
          {error.email && <p style={{ color: "red" }}>{error.email}</p>}
          <div>
            <div id="div2" class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                password
              </span>
              <input
                type="password"
                class="form-control"
                name="password"
                value={inputdata.password || ""}
                onChange={data}
                placeholder="enter user password"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            {error.password && <p style={{ color: "red" }}>{error.password}</p>}
          </div>{" "}
          <br />
          <button type="submit" id="submit" onClick={sendDataToParent}>
            {" "}
            signup
          </button>
          <br />
          <br />
          {/* <a href="login">i have already account</a> */}
          <Link to="/customer_login">i have already account</Link>
        </div>
      </form>
      <br />
    </div>
  );
}
