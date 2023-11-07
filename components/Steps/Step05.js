import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { FaTrashAlt, FaRegTimesCircle } from "react-icons/fa";
import * as Yup from "yup";
import NextStep from "./NextStep";
import Inputform from "./FormSteps/Inputform";
import SelectForm from "./FormSteps/SelectForm";
import Stepmodal from "./Stepmodal";
const initialValues = {
  id: nanoid(),
  languageName: "",
  nativeLanguage: "",
  reading: "",
  writing: "",
  speaking: "",
  fileLanguage: "",
};
const validationSchema = Yup.object({
  languageName: Yup.string().required("Required"),
  nativeLanguage: Yup.string().required("Required"),
  reading: Yup.string().required("Required"),
  writing: Yup.string().required("Required"),
  speaking: Yup.string().required("Required"),
  fileLanguage: Yup.string(),
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
            {t("titleStep05")}
          </div>
          <div>
            <div className="border border-indigo-50 h-full w-full overflow-auto">
              <table className=" w-full min-w-max table-auto text-left">
                <thead className=" ">
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center"></th>
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                    {t("languageName")}
                  </th>
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                    {t("nativeLanguage")}
                  </th>
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                    {t("reading")}
                  </th>
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                    {t("writing")}
                  </th>
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                    {t("speaking")}
                  </th>
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                    {t("fileLanguage")}
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
                      {item.languageName}
                    </td>
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                      {item.nativeLanguage}
                    </td>
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                      {item.reading}
                    </td>
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                      {item.writing}
                    </td>
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                      {item.speaking}
                    </td>
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                      {item.fileLanguage}
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
              {t("clickToLanguage")}
            </button>
          </div>
        </div>
        {showFormGrade && (
          <Stepmodal
            formik={formik}
            setModal={setModal}
            name={[
              {
                name: "languageName",
                model: "SelectForm",
                value: ["book", "book2"],
                type: "text",
              },
              {
                name: "nativeLanguage",
                model: "SelectForm",
                value: ["book", "book2"],
                type: "text",
              },
              {
                name: "reading",
                model: "SelectForm",
                value: ["book", "book2"],
                type: "text",
              },
              {
                name: "writing",
                model: "SelectForm",
                value: ["book", "book2"],
                type: "text",
              },
              {
                name: "speaking",
                model: "SelectForm",
                value: ["book", "book2"],
                type: "text",
              },
              {
                name: "fileLanguage",
                model: "Inputform",
                value: "",
                type: "file",
              },
            ]}
            title={"recordLanguageProficiency"}
          />
        )}
        <NextStep />
      </div>
    </div>
  );
};
export default Step05;
