import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Service_form() {
  const [receiveemployee, setreceiveemployee] = useState([]);
  const [Name, setName] = useState();
  const [Mobile, setMobile] = useState();
  const [value, setvalue] = useState();
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    password: "",
    phone_no: "",
    address: "",
    car_number: "",
    car_company: "",
    car_model: "",
    date: "",
    car_color: "",
    employeename: "",
    employeephoneno: "",
  });

  useEffect(() => {
    const data2 = sessionStorage.getItem("employeedata");
    if (data2) {
      setreceiveemployee(JSON.parse(data2));
    }

    const user = receiveemployee.some((item, i) => item.name === value.name);
    if (user) {
      setMobile(value.mobileno);
    }
    setformdata((prevState) => ({
      ...prevState,
      employeename: Name,
      employeephoneno: Mobile,
    }));
    console.log(formdata.employeename);
    console.log(formdata.employeephoneno);
    console.log(formdata);
    console.log(value);
    console.log(Name);
    console.log(Mobile);
  }, [value]);

  const data = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const storedArray = JSON.parse(sessionStorage.getItem("formArray")) || [];
  const submit = (e) => {
    e.preventDefault();

    const newElement = formdata;
    storedArray.push(newElement);
    sessionStorage.setItem("formArray", JSON.stringify(storedArray));
    window.location.href = "/customer-profile";
  };

  const Setsetdata = (item) => {
    setvalue(item);
    setName(item.name);
    setMobile(item.mobileno);
  };
  return (
    <form
      onSubmit={submit}
      style={{
        alignItems: "center",
        border: 2,
        marginLeft: 450,
        marginTop: 50,
        border: 2,
        borderBlockColor: "ActiveBorder",
      }}
    >
      <div class="mb-3">
        <div className="car"></div>
        <br></br>
        <h3 style={{ paddingLeft: 100 }}>car wash service form</h3>

        <div style={{ width: 900 }}>
          <div class="col-md-6">
            <label for="inputname4" class="form-label">
              name
            </label>
            <input
              name="name"
              type="text"
              class="form-control"
              placeholder="enter your name"
              id="inputname4"
              onChange={data}
            />
          </div>
          <div class="col-md-6">
            <label
              for="inputmobile4"
              pplaceholder="enter your email"
              class="form-label"
            >
              mobile no
            </label>
            <input
              name="phone_no"
              onChange={data}
              type="number"
              placeholder="enter your email"
              class="form-control"
              id="inputmobile4"
            />
          </div>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Email
            </label>
            <input
              onChange={data}
              name="email"
              type="email"
              placeholder="enter your email"
              class="form-control"
              id="inputEmail4"
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Password
            </label>
            <input
              onChange={data}
              name="password"
              type="password"
              placeholder="enter your password"
              class="form-control"
              id="inputPassword4"
            />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              onChange={data}
              name="address"
              style={{ width: "50%" }}
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="ex-1234 Main St"
            />
          </div>
          <div class="col-md-6">
            <label for="input4" class="form-label">
              car no
            </label>
            <input
              name="car_no"
              onChange={data}
              type="text"
              class="form-control"
              id="inputcarno4"
            />
          </div>
          <div class="col-md-6">
            <label for="input4" class="form-label">
              car company
            </label>
            <input
              onChange={data}
              name="car_company"
              type="text"
              placeholder="car company"
              class="form-control"
              id="inputcar4"
            />
          </div>
          <div class="col-md-6">
            <label for="input4" class="form-label">
              car model
            </label>
            <input
              onChange={data}
              name="car_model"
              type="text"
              placeholder="car model"
              class="form-control"
              id="inputcarmodel4"
            />
          </div>
          <span class="dropdown">
            <label for="input4" class="form-label">
              employee name
            </label>
            <br />
            <input
              class=" dropdown-toggle"
              type="select"
              value={Name}
              placeholder="select employee name"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onChange={data}
            />
            <ul class="dropdown-menu ">
              {receiveemployee.map((item, i) => (
                <li
                  key={i}
                  class="dropdown-item "
                  onClick={() => Setsetdata(item)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </span>
          <br></br>
          <span class="dropdown">
            <label for="input4" class="form-label">
              employee phone number
            </label>
            <br />
            <input
              class=" dropdown-toggle"
              type="select"
              name="employeephoneno"
              value={Mobile}
              placeholder=" employee phone number"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              onChange={data}
            />
          </span>
          <div>
            <label for="input4" placeholder="car color">
              date
            </label>
            <br />
            <input type="date" name="date" onChange={data}></input>
          </div>
          <div class="col-md-6">
            <label for="input4" placeholder="car color" class="form-label">
              color
            </label>
            <input
              onChange={data}
              name="car_color"
              type="color"
              style={{ width: 60, height: 40 }}
              class="form-control"
              id="inputcolor4"
            />
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
          <div>
            <a href="/dashbord">go to dashbord</a>
          </div>
        </div>
      </div>
    </form>
  );
}
