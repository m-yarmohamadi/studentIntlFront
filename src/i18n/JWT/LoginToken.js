import axios from "axios";
import jwt from "jsonwebtoken";
import { useSelector } from "react-redux";

const LoginToken = () => {
  const accessToken = useSelector((state) => state.tokenReducer.accessToken);
  const refreshToken = useSelector((state) => state.tokenReducer.refreshToken);

  jwt.verify(accessToken, "0912M@hdi1870617", (err, decoded) => {
    if (err) {
      console.log("Invalid token");
    } else {
      const currentTimestamp = Math.floor(Date.now() / 1000);
      if (decoded.exp < currentTimestamp) {
        console.log("Token has expired");
      } else {
        console.log("Token is still valid");
      }
    }
  });
};

//   axios
//     .post("http://172.20.23.112:5000/auth/token", tokenCode)
//     .then((res) => {
//       const login = res.data;
//       console.log(login);
//       return login;
//     })
//     .catch((err) => console.log(err));

export default LoginToken;
