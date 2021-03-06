export const signInQuery = (username, password, setLogIn, makeNotification) => {
  querySignIn(username, password, setLogIn, makeNotification);
};

export const signUpQuery = (
  username,
  password1,
  password2,
  makeNotification
) => {
  if (password1 !== password2) {
    makeNotification("Passwords dont Match");
    return;
  } else if (password1.length < 6) {
    makeNotification("Password Must Be Atlest 6 Characters");
    return;
  }

  querySignUp(username, password1, password2, makeNotification);
};

const querySignIn = (username, password, setLogIn, makeNotification) => {
  var mockReturnVal = {
    success: 1,
    id: 1432,
    token: "4hu3h4u45uh12h",
    name: "bob",
  };
  //var mockReturnVal = {success: 0, error: "Wrong Password or Username" }

  if (mockReturnVal.success === 1) {
    setLogIn();
  } else {
    makeNotification(mockReturnVal.error);
    return;
  }
};

const querySignUp = (username, password1, password2, makeNotification) => {
//   var mockReturnVal = {
//     success: 1,
//   };
  var mockReturnVal = {success: 0, error: "Passwords dont Match" }

  if (mockReturnVal.success === 1) {
    makeNotification("Account Created Successfully");
  } else {
    makeNotification(mockReturnVal.error);
    return;
  }
};
