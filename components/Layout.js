import Head from "next/head";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import jwt from "jsonwebtoken";
import axios from "axios";

import {
  FaCogs,
  FaHome,
  FaFileContract,
  FaPowerOff,
  FaCaretDown,
} from "react-icons/fa";
import Menuuser from "./Menuuser";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import {
  toggleLogin,
  toggleRefreshToken,
} from "@/fuchers/resCode/resCodeSlice";
const Layout = ({ title, children }) => {
  const accessToken = useSelector((state) => state.tokenReducer.accessToken);
  const refreshToken = useSelector((state) => state.tokenReducer.refreshToken);
  const userEmail = useSelector((state) => state.userReducer.User.email);
  const FetchData = async () => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_URL}/auth/loginToken`,
        { loginToken: true }
      );
      if (response) {
        const loginToken = response.data.loginToken;
        console.log(loginToken);
      } else {
        console.log("EEEEEEERRRRRRROOOOOOORRRRRRR=");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };
  useEffect(() => {
    if (accessToken) {
      const decodedToken = jwt.decode(accessToken);
      const currentTimestamp = Math.floor(Date.now() / 1000);
      if (decodedToken.exp < currentTimestamp) {
        dispatch(toggleLogin(true));
      } else {
        dispatch(toggleLogin(false));
      }
    } else {
      dispatch(toggleLogin(false));
    }
  }, []);

  const dispatch = useDispatch();

  const lang = useSelector((state) => state.languageReducer.value.languageName);

  const { i18n } = useTranslation();
  function handleChange(event) {
    const lang2 = event.target.value;
    i18n.changeLanguage(lang2);
    dispatch({ type: `language/${lang2}` });
  }

  const direction = useSelector(
    (state) => state.languageReducer.value.direction
  );
  const font = useSelector((state) => state.languageReducer.value.font);

  return (
    <div
      style={{ direction: direction, fontFamily: font }}
      className=" box-border container mx-auto "
    >
      <Head>
        <title>{`${title}-studentIntl`}</title>
      </Head>
      <div className="ttt  md:py-12 fexl items-center ">
        <div className="h-full  w-full bg-indigo-200 shadow-lg max-w-full  bg-opacity-70   ">
          <div className="p-2 text-indigo-50  flex  justify-between  bg-indigo-950 w-full h-10    text-center font-black ">
            <div className=" font-extrabold flex justify-start">
              <FaPowerOff className=" me-2 h-6 w-6 " aria-hidden="true" />
              <Menuuser />
            </div>
            <div className=" text-indigo-950 flex gap-2 ">
              <select
                defaultValue={"english"}
                className="bg-indigo-200 hover:bg-indigo-300 font-bold p-1 text-sm rounded-sm"
                onChange={handleChange}
              >
                <option value="persian">فارسی</option>
                <option value="arabic">العربیه</option>
                <option value="english">english</option>
              </select>
              <Link href="/dictionary">
                <FaFileContract
                  className="text-indigo-50 hover:text-indigo-100 ms-5 h-6 w-6 "
                  aria-hidden="true"
                />
              </Link>

              <FaCogs
                className="text-indigo-50 hover:text-indigo-100 ms-3 h-6 w-6 "
                aria-hidden="true"
              />

              <Link href="/">
                <FaHome
                  className="text-indigo-50 hover:text-indigo-100 ms-3 h-6 w-6 "
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <main className="pb-10 h-full w-full   text-center">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
