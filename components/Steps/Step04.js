import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { FaTrashAlt } from "react-icons/fa";
import NextStep from "./NextStep";
import Stepmodal from "./Stepmodal";
import { td, th } from "./Classes/classSteps";
import { Step04Validation } from "@/Validation/formValidate";

const initialValues = {
  id: nanoid(),
  languageName: "",
  nativeLanguage: "",
  reading: "",
  writing: "",
  speaking: "",
  fileLanguage: "",
};
const validationSchema = Step04Validation;
const Step04 = () => {
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
            {t("titleStep04")}
          </div>
          <div>
            <div className="border border-indigo-50 h-full w-full overflow-auto">
              <table className=" w-full min-w-max table-auto text-left">
                <thead className=" ">
                  <th className={th}></th>
                  <th className={th}>{t("languageName")}</th>
                  <th className={th}>{t("nativeLanguage")}</th>
                  <th className={th}>{t("reading")}</th>
                  <th className={th}>{t("writing")}</th>
                  <th className={th}>{t("speaking")}</th>
                  <th className={th}>{t("fileLanguage")}</th>
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
                    <td className={td}>{item.languageName}</td>
                    <td className={td}>{item.nativeLanguage}</td>
                    <td className={td}>{item.reading}</td>
                    <td className={td}>{item.writing}</td>
                    <td className={td}>{item.speaking}</td>
                    <td className={td}>{item.fileLanguage}</td>
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
                value: ["persian", "english", "arabic", "france", "other"],
                type: "text",
              },
              {
                name: "nativeLanguage",
                model: "SelectForm",
                value: ["poor", "fair", "good"],
                type: "text",
              },
              {
                name: "reading",
                model: "SelectForm",
                value: ["poor", "fair", "good"],
                type: "text",
              },
              {
                name: "writing",
                model: "SelectForm",
                value: ["poor", "fair", "good"],
                type: "text",
              },
              {
                name: "speaking",
                model: "SelectForm",
                value: ["poor", "fair", "good"],
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
export default Step04;
