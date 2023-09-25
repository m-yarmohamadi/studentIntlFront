import React from "react";
import { UseSelector, useDispatch, useSelector } from "react-redux";

const Logo = () => {
  const lang = useSelector((state) => state.languageReducer.value.languageName);

  return (
    <div className="flex justify-center">
      {lang === "english" ? (
        <img className=" p-4 w-48 " src="/images/iranLogoEn.png" alt="" />
      ) : lang === "arabic" ? (
        <img className=" p-4 w-48 " src="/images/iranLogoAr.png" alt="" />
      ) : (
        <img className=" p-4 w-48 " src="/images/iranLogo.png" alt="" />
      )}
    </div>
  );
};

export default Logo;
