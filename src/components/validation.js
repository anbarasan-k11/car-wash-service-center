export const Validation = (inputdata) => {
  let error = {};
  //const emailpattern = /^\S+@\S+\.\S+$/;
  const passwordpattern =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  if (!inputdata.name) {
    error.name = "name required";
  }
  if (!inputdata.username) {
    error.username = "username required";
  }
  if (!inputdata.password) {
    error.password = "password required";
  } else if (passwordpattern.test(inputdata.password)) {
    error.password = "password didn't match";
  } else if (inputdata.password.lengh < 8) {
    error.password = "Password must contain at least 8 characters";
  }
  if (!inputdata.emailid) {
    error.email = "email id required";
  }
  //    else if (!inputdata.email || !emailpattern.test(inputdata.email)) {
  //     error.email = "Invalid email address";
  //   }

  return error;
};
export const Validation1 = (inputdata) => {
  let error = {};
  if (!inputdata.emailid) {
    error.email = "email required";
  }
  if (!inputdata.date) {
    error.date = "date required";
  }
  return error;
};
export const Managerlogin = (inputdata) => {
  let error = {};

  if (!inputdata.username) {
    error.username = "username required";
  } else if (inputdata.username !== "anbarasank") {
    error.username = "username didnot match";
  }
  if (!inputdata.password) {
    error.password = "password required";
  } else if (inputdata.password !== "anbu0306") {
    error.password = "password didnot match";
  }
  return error;
};

export const Customerlogin = (inputdata) => {
  let error = {};
  if (!inputdata.username) {
    error.username = "name required";
  }
  if (!inputdata.password) {
    error.password = "password required";
  }
  return error;
};
