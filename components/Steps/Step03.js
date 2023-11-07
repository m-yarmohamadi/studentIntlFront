import SelectSteps from "./SelectSteps";
import { useFormik, validateYupSchema } from "formik";
import NextStep from "./NextStep";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import Inputform from "./FormSteps/Inputform";
import { nanoid } from "@reduxjs/toolkit";
import { Card } from "semantic-ui-react";
import { FaTrashAlt, FaRegTimesCircle } from "react-icons/fa";
import * as Yup from "yup";
import SelectForm from "./FormSteps/SelectForm";
import Stepmodal from "./Stepmodal";
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
  fileGrade: "",
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
  fileGrade: Yup.string(),
});
const Step05 = () => {
  const [data, setData] = useState([]);
  const [showFormGrade, setShowFormGrade] = useState(false);
  const setModal = () => {
    setShowFormGrade(!showFormGrade);
  };

  const { t } = useTranslation();
  const onSubmit = (values) => {
    setData([...data, { ...values, id: nanoid() }]);
    setShowFormGrade(false);
    console.log(data);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });
  return (
    <div className=" fade-in  h-full w-full">
      <div className="  vh70 rounded-md m-1 px-8 text-center bg-indigo-900 bg-opacity-60 flex flex-col justify-between">
        <div className=" w-full">
          <div className=" py-4 text-3xl text-white font-black">
            {t("titleStep03")}
          </div>
          <div>
            <div className="border border-indigo-50 h-full w-full overflow-auto">
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
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                    {t("fileGrade")}
                  </th>
                </thead>
                {data.map((item) => (
                  <tbody key={item.id} className="w-full">
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 items-center justify-center text-center">
                      <button
                        type=""
                        onClick={() =>
                          setData(data.filter((d) => d.id !== item.id))
                        }
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
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                      {item.fileGrade}
                    </td>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                setShowFormGrade(true);
              }}
              className=" shadow-md bg-indigo-900 hover:bg-indigo-800 p-2 text-lg text-indigo-50 font-extrabold w-full rounded-md border border-indigo-50 hover:border-indigo-950 my-5"
              type="button"
            >
              {t("clickToRegisterDegree")}
            </button>
          </div>
        </div>
        {showFormGrade && (
          <Stepmodal
            formik={formik}
            setModal={setModal}
            name={[
              {
                name: "grade",
                model: "SelectForm",
                value: [
                  "diploma",
                  "associateDegree",
                  "bachelor",
                  "master",
                  "phd",
                ],
                type: "text",
              },
              { name: "start", model: "Inputform", value: "", type: "date" },
              { name: "end", model: "Inputform", value: "", type: "date" },
              {
                name: "fieldOfStudy",
                model: "Inputform",
                value: "",
                type: "text",
              },
              { name: "country", model: "Inputform", value: "", type: "text" },
              { name: "city", model: "Inputform", value: "", type: "text" },
              {
                name: "schoolOrUnivercityName",
                model: "Inputform",
                value: "",
                type: "text",
              },
              { name: "GPA", model: "Inputform", value: "", type: "number" },
              { name: "outOf", model: "Inputform", value: "", type: "number" },
              {
                name: "fileGrade",
                model: "Inputform",
                value: "",
                type: "file",
              },
            ]}
            title={"recordRegisterDegree"}
          />
        )}
        <NextStep />
      </div>
    </div>
  );
};
export default Step05;
