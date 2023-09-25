import React from "react";
import { useRouter } from "next/router";
import TitleComponent from "./TitleComponent";

const RegistrationNotices = () => {
  const router = useRouter();

  return (
    <div className="w-full px-16 mx-8 md:mx-36">
      <div className=" text-indigo-100 pt-2 shadow-md h-10  bg-indigo-950 ">
        <TitleComponent I={"registrationNotices"} />
      </div>
      <div className="px-8  overflow-y-auto mb-8 shadow-md h-48  bg-indigo-50 opacity-90 ">
        <table className=" w-full   text-md font-black">
          <tbody>
            <tr className="border-b border-indigo-700">
              <td>
                <TitleComponent I={"newStudentRegistrationForMehr"} />
                1402
              </td>
              <td>
                <button
                  onClick={() => router.push("inputForm")}
                  type="button"
                  className="w-64 hover:cursor-pointer  shadow-sm shadow-indigo-950 hover:shadow-indigo-900 text-indigo-100  m-1 bg-indigo-900 hover:bg-indigo-800 border border-1 border-indigo-50 rounded-md px-6 py-2"
                >
                  <TitleComponent I={"register"} />
                </button>
              </td>
            </tr>
            <tr className="border-b border-indigo-700">
              <td>
                <TitleComponent I={"newStudentRegistrationForMehr"} />
                1401
              </td>
              <td>
                <button
                  type="button"
                  className=" w-96 cursor-default shadow-sm text-indigo-300  m-1 bg-indigo-50  border border-1 border-indigo-50 rounded-md px-6 py-2"
                >
                  <TitleComponent I={"theRegistrationPeriodHasEnded"} />
                </button>
              </td>
            </tr>
            <tr className="border-b border-indigo-700">
              <td>
                <TitleComponent I={"newStudentRegistrationForMehr"} />
                1400
              </td>
              <td>
                <button
                  type="button"
                  className=" w-96 cursor-default shadow-sm text-indigo-300  m-1 bg-indigo-50  border border-1 border-indigo-50 rounded-md px-6 py-2"
                >
                  <TitleComponent I={"theRegistrationPeriodHasEnded"} />
                </button>
              </td>
            </tr>
            <tr className="border-b border-indigo-700">
              <td>
                <TitleComponent I={"newStudentRegistrationForMehr"} />
                1399
              </td>
              <td>
                <button
                  type="button"
                  className=" w-96 cursor-default shadow-sm text-indigo-300  m-1 bg-indigo-50  border border-1 border-indigo-50 rounded-md px-6 py-2"
                >
                  <TitleComponent I={"theRegistrationPeriodHasEnded"} />
                </button>
              </td>
            </tr>
            <tr className="border-b border-indigo-700">
              <td>
                <TitleComponent I={"newStudentRegistrationForMehr"} />
                1398
              </td>
              <td>
                <button
                  type="button"
                  className=" w-96 cursor-default shadow-sm text-indigo-300  m-1 bg-indigo-50  border border-1 border-indigo-50 rounded-md px-6 py-2"
                >
                  <TitleComponent I={"theRegistrationPeriodHasEnded"} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegistrationNotices;
