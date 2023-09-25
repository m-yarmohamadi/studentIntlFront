import React from "react";

const Input = ({ label, name, formik, type = "text" }) => {
  return (
    <div className=" h-20">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-bold text-indigo-900 dark:text-white"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className=" shadow-md w-full bg-indigo-50 border border-indigo-300 text-indigo-900 sm:text-sm rounded-md focus:bg-white focus:ring-indigo-600 focus:border-indigo-600 block  p-2.5 dark:bg-indigo-700 dark:border-indigo-600 dark:placeholder-indigo-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        {...formik.getFieldProps(name)}
      />
      {formik.errors[name] && formik.touched[name] && (
        <p className=" text-sm text-rose-800">{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default Input;
