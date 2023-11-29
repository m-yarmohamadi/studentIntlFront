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
  fullname: "",
  position: "",
  institute: "",
  relationship: "",
  email: "",
};
const validationSchema = Yup.object({
  fullname: Yup.string().required("Required"),
  position: Yup.string().required("Required"),
  institute: Yup.string().required("Required"),
  relationship: Yup.string().required("Required"),
  email: Yup.string().required("Required").email("Invalid Email"),
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
                    {t("fullname")}
                  </th>
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                    {t("position")}
                  </th>
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                    {t("institute")}
                  </th>
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                    {t("relationship")}
                  </th>
                  <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                    {t("email")}
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
                      {item.fullname}
                    </td>
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                      {item.position}
                    </td>
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                      {item.institute}
                    </td>
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                      {item.relationship}
                    </td>
                    <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                      {item.email}
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
              {t("clickReference")}
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
                name: "fullname",
                model: "Inputform",
                value: "",
                type: "text",
              },
              {
                name: "position",
                model: "Inputform",
                value: "",
                type: "text",
              },
              {
                name: "institute",
                model: "Inputform",
                value: "",
                type: "text",
              },
              {
                name: "relationship",
                model: "Inputform",
                value: "",
                type: "text",
              },
              {
                name: "email",
                model: "Inputform",
                value: "",
                type: "text",
              },
            ]}
            title={"enterReference"}
          />
        )}
        <NextStep />
      </div>
    </div>
  );
};
export default Step05;
