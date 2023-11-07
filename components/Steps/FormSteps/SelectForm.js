import React from "react";
import { useTranslation } from "react-i18next";

const SelectForm = ({ formik, name, value }) => {
  const { t } = useTranslation();

  return (
    <div className=" h-20">
      <label
        htmlFor={name}
        className="-mb-2  block text-md font-normal text-indigo-50 text-start"
      >
        {t(name)}
        <span className="px-1  text-rose-400">*</span>
      </label>
      <select
        {...formik.getFieldProps(name)}
        className={`block w-full px-4 py-1 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40`}
      >
        {value.map((item) => (
          <option key={item.index} value={item}>
            {t(item)}
          </option>
        ))}
      </select>
      {formik.touched[name] && formik.errors[name] ? (
        <div className=" text-red-800 ">{formik.errors[name]}</div>
      ) : null}
    </div>
  );
};

export default SelectForm;
