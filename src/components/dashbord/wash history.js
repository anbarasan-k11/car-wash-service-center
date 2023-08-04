import { useEffect, useState } from "react";

export default function Wash_history() {
  const [formdata, setformdata] = useState([]);

  useEffect(() => {
    const storedArray = JSON.parse(sessionStorage.getItem("formArray")) || [];
    if (storedArray) {
      setformdata(storedArray);
    }
  }, []);

  return (
    <div>
      <table
        class="table"
        style={{
          width: "100%",
          border: "1 solid",
          backgroundcolor: "aliceblue",
        }}
      >
        <tbody>
          <tr class="table-dark">
            <th>s.no</th>
            <th>employee id</th>
            <th>customer id</th>
            <th>date</th>
            <th>car number</th>
            <th>total price</th>
          </tr>
          {formdata.map((data, item) => {
            return (
              <tr key={item}>
                <td>{item + 1}</td>
                <td>{1000 + item + 1}</td>
                <td>{data.name}</td>
                <td>{data.date}</td>
                <td>{data.car_no}</td>
                <td>5000</td>
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
