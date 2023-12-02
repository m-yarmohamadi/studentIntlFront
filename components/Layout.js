import Head from "next/head";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import toast from 'react-hot-toast';


import {
  FaCogs,
  FaHome,
  FaFileContract,
  FaPowerOff,
} from "react-icons/fa";
import Menuuser from "./Menuuser";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { toggleAccessToken } from "@/fuchers/resCode/resCodeSlice";
import { toggleLogin } from "@/fuchers/user/userSlice";
const Layout = ({ title, children }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();


  const accessToken = useSelector((state) => state.tokenReducer.accessToken);
  const login = useSelector((state) => state.userReducer.login);
  const firstname = useSelector((state) => state.userReducer.firstname);
  const lastname = useSelector((state) => state.userReducer.lastname);




  const logout = (e) => {

    e.preventDefault()
    dispatch(toggleLogin(false))


    toast.success(t("YouHaveSuccessfullyLoggedOut"))

  }
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
        <div className="h-full  w-full bg-indigo-200 shadow-sm shadow-indigo-600 max-w-full  bg-opacity-70   ">
          <div className="p-2 text-indigo-50  flex  justify-between  bg-indigo-950 w-full h-10    text-center font-black ">
            <div className=" font-extrabold flex justify-start">

              {login && <><FaPowerOff onClick={logout} className=" me-2 h-6 w-6 p-1 cursor-pointer" aria-hidden="true" /><Menuuser firstname={firstname} lastname={lastname} /></>}


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
              <Link href="/admin">

                <FaCogs
                  className="text-indigo-50 hover:text-indigo-100 ms-3 h-6 w-6 "
                  aria-hidden="true"
                />
              </Link>

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
