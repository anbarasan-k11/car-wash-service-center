// import { Validation1 } from "../Validation";
// import { useEffect, useState } from "react";
// export default function Customer_form() {
//   const [Formdata, setformdata] = useState({
//     name: "",
//     password: "",
//   });
//   const [error, seterror] = useState({});
//   const storedarray = JSON.parse(sessionStorage.getItem("myArray")) || [];
//   console.log(storedarray);
//   useEffect(() => {
//     const storedArray = JSON.parse(sessionStorage.getItem("formArray")) || [];
//     if (storedArray) {
//       setformdata(storedArray);
//     }
//   }, []);

//   const data = (e) => {
//     seterror(Validation1(Formdata));
//   };
//   const HandleClick = (e) => {
//     e.preventDefault();
//   };
//   return (
//     <form id="style1" onSubmit={HandleClick}>
//       <div
//         style={{ padding: 20, paddingTop: 30 }}
//         class="input-group input-group-sm mb-3"
//       >
//         <span class="input-group-text" id="inputGroup-sizing-sm-3">
//           username
//         </span>
//         <input
//           type="text"
//           name="username"
//           value={Formdata.name || ""}
//           placeholder="enter user name"
//           onChange={data}
//           class="form-control"
//           aria-label="Sizing example input"
//           aria-describedby="inputGroup-sizing-sm"
//         />
//       </div>
//       {error.name && <p style={{ color: "red" }}>{error.name}</p>}
//       <div
//         style={{ paddingLeft: 20, paddingRight: 20 }}
//         class="input-group input-group-sm mb-3"
//       >
//         <span class="input-group-text" id="inputGroup-sizing-sm">
//           password
//         </span>
//         <input
//           type="password"
//           class="form-control"
//           name="password"
//           value={Formdata.password || ""}
//           onChange={data}
//           placeholder="enter user password"
//           aria-label="Sizing example input"
//           aria-describedby="inputGroup-sizing-sm"
//         />
//       </div>
//       {error.password && <p style={{ color: "red" }}>{error.password}</p>}
//       <div>
//         <button type="submit" id="submit">
//           {" "}
//           login
//         </button>
//       </div>
//     </form>
//   );
// }
