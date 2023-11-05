import SelectSteps from "./SelectSteps";
import { useFormik, validateYupSchema } from "formik";

import InputSteps from "./InputSteps";
import NextStep from "./NextStep";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Inputform from "./Step03/Inputform";
import { nanoid } from "@reduxjs/toolkit";
import { Card } from "semantic-ui-react";
import { FaTrashAlt } from "react-icons/fa";
import * as Yup from "yup";
const initialValues = {
  id: nanoid(),
  grade: "",
  start: "",
  end: "",
  fieldOfStudy: "",
  country: "",
  city: "",
  schoolOrUnivercityName: "",
  GPA: "",
  outOf: "",
};
const validationSchema = Yup.object({
  grade: Yup.string().required("Required"),
  start: Yup.string().required("Required"),
  end: Yup.string().required("Required"),
  fieldOfStudy: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  schoolOrUnivercityName: Yup.string().required("Required"),
  GPA: Yup.number().max(100).required("Required"),
  outOf: Yup.string().required("Required"),
});
const Step05 = () => {
  const [data, setData] = useState([]);

  const { t } = useTranslation();

  const onSubmit = (values) => {
    setData([...data, values]);

    console.log(data);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    setFieldValue: (field) => {
      const data = data.filter((item) => item.index !== field);
    },
  });

  return (
    <div className=" fade-in  h-full w-full">
      <div className="  vh70 rounded-md m-1 px-8 text-center bg-indigo-900 bg-opacity-60 flex flex-col justify-between">
        <div className=" w-full">
          <div className=" py-4 text-3xl text-white font-black">
            {t("titleStep05")}
          </div>

          <div>
            <Card className="border border-indigo-50 h-full w-full overflow-auto">
              <table className=" w-full min-w-max table-auto text-left">
                <thead className=" ">
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center"></th>
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                    {t("grade")}
                  </th>
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                    {t("start")}
                  </th>
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                    {t("end")}
                  </th>
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                    {t("fieldOfStudy")}
                  </th>
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                    {t("country")}
                  </th>
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                    {t("city")}
                  </th>
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                    {t("schoolOrUnivercityName")}
                  </th>
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                    {t("GPA")}
                  </th>
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                    {t("outOf")}
                  </th>
                </thead>
                {data.map((item) => (
                  <tbody key={item.index} className="w-full">
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 items-center justify-center text-center">
                      <button
                        type=""
                        onClick={() => {
                          formik.setFieldValue(index);
                        }}
                      >
                        <FaTrashAlt className=" h-6 text-rose-800" />
                      </button>
                    </td>
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                      {item.grade}
                    </td>
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                      {item.start}
                    </td>
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                      {item.end}
                    </td>
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                      {item.fieldOfStudy}
                    </td>
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                      {item.country}
                    </td>
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                      {item.city}
                    </td>
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                      {item.schoolOrUnivercityName}
                    </td>
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                      {item.GPA}
                    </td>
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                      {item.outOf}
                    </td>
                  </tbody>
                ))}{" "}
              </table>{" "}
            </Card>
          </div>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="bg-indigo-950 bg-opacity-20 p-4 my-20 border border-indigo-50"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
            <Inputform formik={formik} name={"grade"} type={"text"} />
            <Inputform formik={formik} name={"start"} type={"date"} />
            <Inputform formik={formik} name={"end"} type={"date"} />
            <Inputform formik={formik} name={"fieldOfStudy"} type={"text"} />
            <Inputform formik={formik} name={"country"} type={"text"} />
            <Inputform formik={formik} name={"city"} type={"text"} />
            <Inputform
              formik={formik}
              name={"schoolOrUnivercityName"}
              type={"text"}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
              <Inputform formik={formik} name={"GPA"} type={"number"} />
              <Inputform formik={formik} name={"outOf"} type={"number"} />
            </div>
          </div>

          <div>
            <button
              className="w-full p-2 my-3 rounded-md bg-indigo-800 hover:bg-indigo-900 text-indigo-50 text-lg"
              type="submit"
            >
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step05;
