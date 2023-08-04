import { useEffect, useState } from "react";
import { React } from "react";
import { Validation1 } from "../validation";
export const EmployeeLogin = () => {
  const [issubmit, setissubmit] = useState(false);
  let [inputdata, setinputdata] = useState({
    emailid: "",
    date: "",
  });
  let [error, seterror] = useState({});
  useEffect(() => {
    if (Object.keys(error).length === 0 && issubmit) {
    }
  }, [error]);

  const data = (e) => {
    setinputdata({ ...inputdata, [e.target.name]: e.target.value });
  };

  function on(e) {
    e.preventDefault();
    setissubmit(true);
    seterror(Validation1(inputdata));
    const Employeedata = JSON.parse(sessionStorage.getItem("employeedata"));
    const userfound = Employeedata.some(
      (user) =>
        user.emailid === inputdata.emailid && user.dob === inputdata.date
    );
    console.log(Employeedata);
    console.log(userfound);
    console.log(inputdata);
    if (userfound) {
      window.location.href = "/dashbord";
      alert("login successful");
    } else {
      alert("Invalid username or password!");
    }
  }
  return (
    <div className="App">
      <h1 id="h1">WELCOME WORKER</h1>
      <h2 id="h1"> PLEASE LOGIN TO CONTINUE</h2>
      <br />
      <form
        id="form2"
        style={{
          marginright: 180,
          marginleft: 150,
          width: 580,
          backgroundimage: "linear-gradient(90deg, #00ccff, #bb44ff)",
        }}
        onSubmit={on}
      >
        <div id="form">
          <div id="logo"></div>
          <br />
          <div>
            <div id="div1" class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                emailid
              </span>
              <input
                type="text"
                class="form-control"
                name="emailid"
                onChange={data}
                placeholder="enter user  emailid"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            {error.email && <p style={{ color: "red" }}>{error.email}</p>}

            <div id="div2" class="input-group input-group-sm mb-3">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                date of birth
              </span>
              <input
                type="date"
                class="form-control"
                name="date"
                onChange={data}
                placeholder="enter user dob"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
              />
            </div>
            {error.date && <p style={{ color: "red" }}>{error.date}</p>}

            <button type="submit" id="submit" on>
              {" "}
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
