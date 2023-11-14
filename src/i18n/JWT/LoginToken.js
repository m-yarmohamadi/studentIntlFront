import axios from "axios";
import { useSelector } from "react-redux";
useSelector;
const LoginToken = () => {
  const tokenCode = useSelector((state) => state.tokenReducer.token);

  axios
    .post("http://172.20.23.112:5000/auth/token", tokenCode)
    .then((res) => {
      const login = res.data;
      console.log(login);
      return login;
    })
    .catch((err) => console.log(err));
};

export default LoginToken;
