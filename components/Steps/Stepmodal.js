import React from "react";
import { FaTrashAlt, FaRegTimesCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import SelectForm from "./FormSteps/SelectForm";
import Inputform from "./FormSteps/Inputform";
import Checkboxform from "./FormSteps/checkboxform";
import { Select } from "semantic-ui-react";

const Stepmodal = ({ formik, setModal, name, title }) => {
  const { t } = useTranslation();

  return (
    <div className=" fade-in  justify-center  flex  overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-md">
      <div className="relative  w-3/5 ">
        <div className=" flex flex-col justify-start  px-6 pt-5 mx-auto  lg:pt-10">
          <div className=" text-start bg-indigo-50  shadow-lg shadow-indigo-900 w-full  rounded-lg  dark:border md:mt-0  xl:p-0 dark:bg-indigo-800 dark:border-indigo-700">
            <div className="p-1">
              <form
                onSubmit={formik.handleSubmit}
                className="bg-indigo-900 bg-opacity-50 p-4 m-2 border border-indigo-950 rounded-lg shadow-md "
              >
                <div className=" text-end">
                  <button className="" type="" onClick={setModal}>
                    <FaRegTimesCircle
                      className="text-indigo-50  m-1 h-6 w-6 "
                      aria-hidden="true"
                    />
                  </button>
                </div>

                <div className="text-center">
                  <h1 className="pb-8 px-8 -mt-7  text-xl font-extrabold leading-tight tracking-tight text-indigo-900 md:text-2xl dark:text-white ">
                    {t(title)}
                  </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                  {name.map((item) => (
                    <div key={item.index}>
                      {item.model == "SelectForm" && (
                        <SelectForm
                          formik={formik}
                          name={item.name}
                          value={item.value}
                        />
                      )}
                      {item.model == "Inputform" && (
                        <Inputform
                          formik={formik}
                          name={item.name}
                          type={item.type}
                        />
                      )}
                      {item.model == "Checkboxform" && (
                        <Checkboxform
                          formik={formik}
                          name={item.name}
                          type={item.type}
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div>
                  <button
                    className="w-full p-2 my-3 rounded-md bg-indigo-800 hover:bg-indigo-900 text-indigo-50 text-lg"
                    type="submit"
                  >
                    {t("submit")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepmodal;
