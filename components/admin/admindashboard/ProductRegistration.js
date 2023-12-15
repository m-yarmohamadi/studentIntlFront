import { Checkbox } from "@material-tailwind/react";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { FaTrashAlt, FaRegTimesCircle } from "react-icons/fa";
import * as Yup from "yup";
import Stepmodal from "@/components/Steps/Step03Modal";
const initialValues = {
  id: nanoid(),
  title: "",
  startDate: "",
  endDate: "",
  fieldOfStudy: "",
  grade: "",
};
const validationSchema = Yup.object({
  title: Yup.string().required("Required"),
  startDate: Yup.string().required("Required"),
  endDate: Yup.string().required("Required"),
  fieldOfStudy: Yup.string().required("Required"),
  grade: Yup.string().required("Required"),
});


const ProductRegistration = () => {
  const [data, setData] = useState([]);
  const [showFormCourse, setShowFormCourse] = useState(false);
  const setModal = () => {
    setShowFormCourse(!showFormCourse);
  };

  const onSubmit = (values) => {
    setData([...data, { ...values, id: nanoid() }]);
    setShowFormCourse(false);
    console.log(data);
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  const { t } = useTranslation();

  return (
    <div>
      <div className=" w-full">
        <div className=" py-4 text-3xl text-white font-black">
          فرم ایجاد دوره آموزشی جدید
        </div>
        <div>
          <div className="border border-indigo-50 h-full w-full overflow-auto text-lg">
            <table className=" w-full min-w-max table-auto text-left">
              <thead className=" ">
                <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center"></th>
                <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                  عنوان دوره
                </th>
                <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                  تاریخ شروع ثبت نام
                </th>
                <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                  تاریخ پایان ثبت نام
                </th>
                <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                  رشته های تحصیلی
                </th>
                <th className="px-2 py-4 border border-indigo-50 bg-indigo-900 text-white font-extrabold text-center">
                  مقطع تحصیلی
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
                    {item.title}
                  </td>
                  <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                    {item.startDate}
                  </td>
                  <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                    {item.endDate}
                  </td>
                  <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                    {item.fieldOfStudy}
                  </td>
                  <td className="p-1 border border-x-indigo-200 border-y-indigo-900 bg-indigo-100 text-center">
                    {item.grade}
                  </td>
                </tbody>
              ))}
            </table>
          </div>
        </div>
        <div>
          <button
            onClick={() => {
              setShowFormCourse(true);
            }}
            className=" shadow-md bg-indigo-900 hover:bg-indigo-800 p-2 text-lg text-indigo-50 font-extrabold w-full rounded-md border border-indigo-50 hover:border-indigo-950 my-5"
            type="button"
          >
            {t("clickReference")}
          </button>
        </div>
      </div>
      {showFormCourse && (
        <div className="text-lg">
          <div>
            11111
          </div>



          <Stepmodal
            formik={formik}
            setModal={setModal}
            disableForm={!formik.isValid}
            name={[
              {
                name: "title",
                model: "Inputform",
                value: "",
                type: "text",
              },
              {
                name: "startDate",
                model: "Inputform",
                value: "",
                type: "date",
              },
              {
                name: "endDate",
                model: "Inputform",
                value: "",
                type: "date",
              },
              {
                name: "fieldOfStudy",
                model: "Checkboxform",
                value: [
                  "diploma",
                  "associateDegree",
                  "bachelor",
                  "master",
                  "phd",
                ],
                type: "text",
              },
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
            ]}
            title={"enterReference"}
          />

        </div>

      )}
    </div>

  );
};

export default ProductRegistration;
