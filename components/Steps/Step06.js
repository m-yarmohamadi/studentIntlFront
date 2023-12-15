import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { FaTrashAlt, FaRegTimesCircle } from "react-icons/fa";
import NextStep from "./NextStep";
import Stepmodal from "./Step03Modal";
import { Step06Validation } from "@/Validation/formValidate";
import { td, th } from "./Classes/classSteps";
const initialValues = {
  publicationType: "",
  title: "",
  publisher: "",
  year: "",
};
const validationSchema = Step06Validation;
const Step06 = () => {
  const [data, setData] = useState([]);
  const [showFormGrade, setShowFormGrade] = useState(false);
  const setModal = () => {
    setShowFormGrade(!showFormGrade);
  };
  const { t } = useTranslation();
  const onSubmit = (values) => {
    setData([...data, { ...values, id: nanoid() }]);
    setModal();
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
            {t("titleStep06")}
          </div>
          <div>
            <div className="border border-indigo-50 h-full w-full overflow-auto">
              <table className=" w-full min-w-max table-auto text-left">
                <thead className=" ">
                  <th className={th}></th>
                  <th className={th}>{t("publicationType")}</th>
                  <th className={th}>{t("title")}</th>
                  <th className={th}>{t("publisher")}</th>
                  <th className={th}>{t("year")}</th>
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
                    <td className={td}>{item.publicationType}</td>
                    <td className={td}>{item.title}</td>
                    <td className={td}>{item.publisher}</td>
                    <td className={td}>{item.year}</td>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                setModal();
              }}
              className=" shadow-md bg-indigo-900 hover:bg-indigo-800 p-2 text-lg text-indigo-50 font-extrabold w-full rounded-md border border-indigo-50 hover:border-indigo-950 my-5"
              type="button"
            >
              {t("insertBooks")}
            </button>
          </div>
        </div>
        {showFormGrade && (
          <Stepmodal
            formik={formik}
            setModal={setModal}
            disableForm={!formik.isValid}
            name={[
              {
                name: "publicationType",
                model: "SelectForm",
                value: ["book", "book2"],
                type: "text",
              },
              { name: "title", model: "Inputform", value: "", type: "text" },
              {
                name: "publisher",
                model: "Inputform",
                value: "",
                type: "text",
              },
              { name: "year", model: "Inputform", value: "", type: "text" },
            ]}
            title={"registerBook"}
          />
        )}
        <NextStep />
      </div>
    </div>
  );
};
export default Step06;
