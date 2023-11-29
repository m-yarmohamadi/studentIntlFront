import React from "react";
import { FaQuestionCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Input = ({ label, name, formik, type = "text" }) => {
  const { t } = useTranslation();

  return (
    <div className=" h-20">
      <label
        htmlFor={name}
        className=" flex justify-between text-sm font-bold text-indigo-600 dark:text-white"
      >
        {label}
        <FaQuestionCircle className="text-indigo-200" />
      </label>
      <input
        id={name}
        name={name}
        type={type}

        className={
          formik.errors[name] && formik.touched[name]
            ? `shadow-md w-full bg-rose-100 border border-rose-300 text-rose-900 sm:text-sm rounded-md focus:bg-white focus:ring-rose-600 focus:border-rose-600 block  p-2.5 dark:bg-rose-700 dark:border-rose-600 dark:placeholder-rose-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
            : `shadow-md w-full bg-indigo-50 border border-indigo-300 text-indigo-900 sm:text-sm rounded-md focus:bg-white focus:ring-indigo-600 focus:border-indigo-600 block  p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`
        }









        {...formik.getFieldProps(name)}
      />
      {formik.errors[name] && formik.touched[name] && (
        <p className=" text-xs text-rose-800">{t(formik.errors[name])}</p>
      )}
    </div>
  );
};

export default Input;
