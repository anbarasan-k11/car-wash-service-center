import { useState } from "react";
export default function Addemployee() {
  const [employeeId, setEmployeeId] = useState();

  const [Employeedata, setEmployeedata] = useState({
    id: "",
    name: "",
    mobileno: "",
    emailid: "",
    address: "",
    dob: "",
  });
  console.log(employeeId);
  const storedArray = JSON.parse(sessionStorage.getItem("employeedata")) || [];
  const data = (e) => {
    setEmployeedata({ ...Employeedata, [e.target.name]: e.target.value });
  };
  const addemployee = (e) => {
    e.preventDefault();
    const newElement = Employeedata;
    storedArray.push(newElement);
    sessionStorage.setItem("employeedata", JSON.stringify(storedArray));
    window.location.href = "/employe_edetails";
  };
  return (
    <div>
      <form
        style={{
          display: "inline-block",
          marginLeft: 350,
          marginTop: 100,
          padding: 20,
          backgroundColor: "lavender",
        }}
      >
        <div id="div3" class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">
            employee name
          </span>
          <input
            type="text"
            name="name"
            value={Employeedata.name || ""}
            onChange={data}
            class="form-control"
            placeholder="enter a employee name"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div id="div4">
          <div id="div4" class="input-group input-group-sm mb-3">
            <span class="input-group-text" id="inputGroup-sizing-sm">
              emailid
            </span>
            <input
              type="text"
              name="emailid"
              value={Employeedata.emailid || ""}
              placeholder="enter a email address"
              onChange={data}
              class="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
        </div>
        <div id="div4" class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">
            mobile no
          </span>
          <input
            type="text"
            name="mobileno"
            value={Employeedata.mobileno || ""}
            onChange={data}
            class="form-control"
            placeholder="enter a employee phone number"
          />
        </div>
        <div id="div3" class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">
            address
          </span>
          <input
            type="text"
            name="address"
            value={Employeedata.address || ""}
            onChange={data}
            class="form-control"
            placeholder="enter a employee address"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div id="div4" class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">
            date of birth
          </span>
          <input
            type="date"
            name="dob"
            value={Employeedata.dob || ""}
            onChange={data}
            class="form-control"
            placeholder="enter a employee phone number"
          />
        </div>
        <button
          type="submit"
          id="submit"
          style={{ width: "auto" }}
          onClick={addemployee}
        >
          {" "}
          add employee
        </button>
      </form>
    </div>
  );
}
