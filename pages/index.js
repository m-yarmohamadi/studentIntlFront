import Layout from "@/components/Layout";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import Register from "@/components/Register";
import Logo from "@/components/Logo";
import Login from "@/components/Login";
import RegistrationNotices from "@/components/RegistrationNotices";
import VerifyCode from "@/components/VerifyCode";
import {
  toggleLoginPopup,
  toggleRegisterPopup,
  toggleVerifyCodePopup,
} from "../fuchers/popup/popupSlice";
import { useTranslation } from "react-i18next";

const index = () => {
  const { t } = useTranslation();

  const showLogin = useSelector((state) => state.popupReducer.loginPopup);
  const showRegister = useSelector((state) => state.popupReducer.registerPopup);
  const showVerifyCode = useSelector(
    (state) => state.popupReducer.verifyCodePopup
  );
  const dispatch = useDispatch();
  return (
    <Layout title="صفحه اصلی">
      <div className="fade-in h-full flex flex-col justify-between">
        <Logo />
        {/* عنوان سایت */}
        <div className="flex justify-center">
          <p className="font-black text-3xl text-indigo-950">
            {t("RegistrationSystemForForeignStudents")}
          </p>
        </div>

        {/* دکمه های ورود و ریجیستر */}
        <div className="  flex justify-center">
          <button
            type="button"
            onClick={() => dispatch(toggleLoginPopup())}
            className="  hover:cursor-pointer text-2xl font-black shadow-lg shadow-indigo-950  hover:shadow-indigo-900 text-indigo-100  my-6 mx-1 bg-indigo-900 hover:bg-indigo-800 border border-1 border-indigo-50 rounded-md px-8 py-2"
          >
            {t("login")}
          </button>
          <button
            type="button"
            onClick={() => dispatch(toggleRegisterPopup())}
            className="hover:cursor-pointer text-2xl font-black shadow-lg shadow-indigo-950  hover:shadow-indigo-900 text-indigo-100  my-6 mx-1 bg-indigo-900 hover:bg-indigo-800 border border-1 border-indigo-50 rounded-md px-8 py-2"
          >
            {t("register")}
          </button>
        </div>
        {/* اطلاعیه های ثبت نام */}

        <RegistrationNotices />
      </div>

      {/* پاپ اپ لاگین */}
      {showLogin && <Login />}

      {/* پاپ اپ ریجیستر */}
      {showRegister && <Register />}

      {/* پاپ اپ وریفای کد */}
      {showVerifyCode && <VerifyCode />}
    </Layout>
  );
};

export default index;
