import SelectSteps from "./SelectSteps";
import { Formik, Form, Field, useFormik } from "formik";
import { validationSchema } from "@/Validation/formValidate";

import InputSteps from "./InputSteps";
import NextStep from "./NextStep";
import { useTranslation } from "react-i18next";
import { useState } from "react";
const initialValues = {};
const data = [
  {
    id: 1,
    grade: "0",
    start: "0",
    end: "0",
    fieldOfStudy: "0",
    country: "0",
    city: "0",
    schoolOrUnivercityName: "0",
    GPA: "0",
    outOf: "0",
  },
];
const Step05 = () => {
  const { t } = useTranslation();
  const onSubmit = (values) => {
    axios
      .post("http://127.0.0.1:5000/students/step01", {
        values,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  const [list, setList] = useState(data);

  const handleRowClick = (
    grade,
    start,
    end,
    fieldOfStudy,
    country,
    city,
    schoolOrUnivercityName,
    GPA,
    outOf
  ) => {};

  const handleSubmit = (values, { resetForm }) => {
    const newItem = {
      id: list.length + 1,
      grade: values.grade,
      start: values.start,
      end: values.end,
      fieldOfStudy: values.fieldOfStudy,
      country: values.country,
      city: values.city,
      schoolOrUnivercityName: values.schoolOrUnivercityName,
      GPA: values.GPA,
      outOf: values.outOf,
    };
    setList([...list, newItem]);
    resetForm();
  };
  return (
    <div className=" fade-in  h-full w-full">
      <div className="  vh70 rounded-md m-1 px-8 text-center bg-indigo-900 bg-opacity-60 flex flex-col justify-between">
        <div className=" py-4 text-3xl text-white font-black">
          {t("titleStep05")}
        </div>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values }) => (
            <Form className="bg-indigo-950 bg-opacity-20 border border-1 border0indigo-50 p-2">
              <table className="      border border-1 border-indigo-300  w-full ">
                <thead className="">
                  <tr className="bg-indigo-900 text-indigo-50 font-bold">
                    <th>{t("grade")}</th>
                    <th>{t("start")}</th>
                    <th>{t("end")}</th>
                    <th>{t("fieldOfStudy")}</th>
                    <th>{t("country")}</th>
                    <th>{t("city")}</th>
                    <th>{t("schoolOrUnivercityName")}</th>
                    <th>{t("GPA")}</th>
                    <th>{t("outOf")}</th>
                  </tr>
                </thead>
                <tbody className=" text-indigo-50">
                  {list.map((item) => (
                    <tr
                      key={item.id}
                      onClick={() =>
                        handleRowClick(
                          item.grade,
                          item.start,
                          item.end,
                          item.fieldOfStudy,
                          item.country,
                          item.city,
                          item.schoolOrUnivercityName,
                          item.GPA,
                          item.outOf
                        )
                      }
                    >
                      <td>{item.grade}</td>
                      <td>{item.start}</td>
                      <td>{item.end}</td>
                      <td>{item.fieldOfStudy}</td>
                      <td>{item.country}</td>
                      <td>{item.city}</td>
                      <td>{item.schoolOrUnivercityName}</td>
                      <td>{item.GPA}</td>
                      <td>{item.outOf}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="pt-28 grid grid-cols-2 gap-2">
                <div className="flex flex-col justify-start h-full">
                  <label className="-mb-2  block text-md font-normal text-indigo-50 text-start">
                    {t("grade")}
                    <span className="px-1  text-rose-400">*</span>
                  </label>
                  <Field
                    as="select"
                    name="grade"
                    className={`block w-full px-4 py-1 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40`}
                  >
                    <option value="diploma">{t("diploma")}</option>
                    <option value="associateDegree">
                      {t("associateDegree")}
                    </option>
                    <option value="bachelor">{t("bachelor")}</option>
                    <option value="master">{t("master")}</option>
                    <option value="phd">{t("phd")}</option>
                  </Field>
                </div>
              </div>
              <div className=" pt-4  grid grid-cols-4 gap-2">
                <div className="flex flex-col justify-start h-full">
                  <label className="-mb-2  block text-md font-normal text-indigo-50 text-start">
                    {t("start")}
                    <span className="px-1  text-rose-400">*</span>
                  </label>
                  <Field
                    type="date"
                    name="start"
                    value={values.name}
                    className={`block w-full px-4 py-1 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40`}
                  />
                </div>
                <div className="flex flex-col justify-start h-full">
                  <label className="-mb-2  block text-md font-normal text-indigo-50 text-start">
                    {t("end")}
                    <span className="px-1  text-rose-400">*</span>
                  </label>
                  <Field
                    type="date"
                    name="end"
                    value={values.name}
                    className={`block w-full px-4 py-1 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40`}
                  />
                </div>
                <div className="flex flex-col justify-start h-full">
                  <label className="-mb-2  block text-md font-normal text-indigo-50 text-start">
                    {t("fieldOfStudy")}
                    <span className="px-1  text-rose-400">*</span>
                  </label>
                  <Field
                    type="text"
                    name="fieldOfStudy"
                    value={values.name}
                    className={`block w-full px-4 py-1 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40`}
                  />
                </div>
                <div className="flex flex-col justify-start h-full">
                  <label className="-mb-2  block text-md font-normal text-indigo-50 text-start">
                    {t("country")}
                    <span className="px-1  text-rose-400">*</span>
                  </label>
                  <Field
                    type="text"
                    name="country"
                    value={values.name}
                    className={`block w-full px-4 py-1 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40`}
                  />
                </div>
                <div className="flex flex-col justify-start h-full">
                  <label className="-mb-2  block text-md font-normal text-indigo-50 text-start">
                    {t("city")}
                    <span className="px-1  text-rose-400">*</span>
                  </label>
                  <Field
                    type="text"
                    name="city"
                    value={values.name}
                    className={`block w-full px-4 py-1 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40`}
                  />
                </div>
                <div className="flex flex-col justify-start h-full">
                  <label className="-mb-2  block text-md font-normal text-indigo-50 text-start">
                    {t("schoolOrUnivercityName")}
                    <span className="px-1  text-rose-400">*</span>
                  </label>
                  <Field
                    type="text"
                    name="schoolOrUnivercityName"
                    value={values.name}
                    className={`block w-full px-4 py-1 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40`}
                  />
                </div>
                <div className="flex flex-col justify-start h-full">
                  <label className="-mb-2  block text-md font-normal text-indigo-50 text-start">
                    {t("GPA")}
                    <span className="px-1  text-rose-400">*</span>
                  </label>
                  <Field
                    type="text"
                    name="GPA"
                    value={values.name}
                    className={`block w-full px-4 py-1 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40`}
                  />
                </div>
                <div className="flex flex-col justify-start h-full">
                  <label className="-mb-2  block text-md font-normal text-indigo-50 text-start">
                    {t("outOf")}
                    <span className="px-1  text-rose-400">*</span>
                  </label>
                  <Field
                    type="text"
                    name="outOf"
                    value={values.name}
                    className={`block w-full px-4 py-1 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40`}
                  />
                </div>
              </div>
              <button
                className="bg-indigo-900 hover:bg-indigo-950 p-2 rounded-md border border-indigo-50 hover:border-opacity-60 text-indigo-50 w-full my-3"
                type="submit"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>

        <NextStep />
      </div>
    </div>
  );
};

export default Step05;
