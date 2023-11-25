import { useState } from "react";
import { useTranslation } from "react-i18next";
const CheckboxStep = ({ type, name, formik }) => {
  const { t } = useTranslation();

  return (
    <div className="flex   h-full">
      <input
        name={name}
        onChange={(event) => {
          validenglish;
        }}
        type={type}
        {...formik.getFieldProps(name)}
        className="  text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
      />
      <label className="px-2 text-md font-normal text-indigo-50 text-start">
        {t(name)}
      </label>
    </div>
  );
};

export default CheckboxStep;
