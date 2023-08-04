import { useEffect, useState } from "react";
import React from "react";
export default function Employee() {
  const [receiveemployee, setreceiveemployee] = useState([]);
  const [viewdata, setviewdata] = useState();
  const [tableData, setTableData] = useState({});
  const [state, setstate] = useState(false);
  const Viewemployee = (data) => {
    setviewdata(data);
    setstate(true);
    //get it employee id
    const tdElement = document.getElementById("tdElement");
    if (tdElement) {
      const value = tdElement.textContent;
      setTableData(value);
    }
    if (state) {
      sessionStorage.setItem("viewemployeedata", JSON.stringify(viewdata));
      window.location.href = "/employee_info";
    }
  };
  useEffect(() => {
    const storedArray =
      JSON.parse(sessionStorage.getItem("employeedata")) || [];
    if (storedArray) {
      setreceiveemployee(storedArray);
    }
    setviewdata((prevState) => ({
      ...prevState,
      id: tableData,
    }));
  }, []);
  return (
    <div>
      <table
        class="table"
        style={{
          width: "100%",
          width: "100%",
          border: "1 solid",
          backgroundcolor: "aliceblue",
        }}
      >
        <tbody>
          <tr class="table-dark">
            <th>employee id</th>
            <th>employee name</th>
            <th>phone_no</th>
            <th>address</th>
            <th>dob</th>
            <th>emailid</th>
            <th>action</th>
          </tr>
          {receiveemployee.map((data, i) => {
            return (
              <tr key={i}>
                <td id="tdElement">{"100" + (i + 1)}</td>
                <td>{data.name}</td>
                <td>{data.mobileno}</td>
                <td>{data.address}</td>
                <td>{data.dob}</td>
                <td>{data.emailid}</td>
                <td>
                  <button
                    class="btn btn-primary"
                    type="onclick"
                    data={data}
                    onClick={() => Viewemployee(data)}
                  >
                    {" "}
                    Viewemployee
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <button
        style={{ marginLeft: "560px", marginTop: "20px", textAlign: "center" }}
      >
        <a href="dashbord">go to dashbord</a>
      </button>
    </div>
  );
}
