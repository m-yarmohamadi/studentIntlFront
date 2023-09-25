import Layout from "@/components/Layout";
import Step01 from "@/components/Steps/Step01";
import Step02 from "@/components/Steps/Step02";
import Step03 from "@/components/Steps/Step03";
import Step04 from "@/components/Steps/Step04";
import Step05 from "@/components/Steps/Step05";
import Step06 from "@/components/Steps/Step06";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TbArrowBigLeftLinesFilled,
  TbArrowBigRightLinesFilled,
} from "react-icons/tb";
import TitleComponent from "@/components/TitleComponent";

const inputForm = () => {
  const lang = useSelector((state) => state.languageReducer.value.languageName);

  const [step, setStep] = useState(1);
  const [color, setColor] = useState("indigo");
  return (
    <Layout title="فرم ثبت نام">
      <div className={`fade-in h-full flex flex-col justify-between`}>
        <div className={` w-full max-w-full `}>
          <div
            className={`font-bold max-w-full grid grid-cols-3 md:grid-cols-6 gap-2 p-1`}
          >
            <button
              onClick={() => {
                setStep(1);
              }}
              className={
                step === 1
                  ? ` shadow-lg font-black  p-2 bg-${color}-900 hover:bg-${color}-800 rounded-md text-${color}-50 `
                  : ` shadow-lg p-2 bg-${color}-100  rounded-md text-${color}-700`
              }
            >
              1-
              <TitleComponent I={"titleStep01"} />
            </button>
            <button
              onClick={() => {
                setStep(2);
              }}
              className={
                step === 2
                  ? ` shadow-lg font-black  p-2 bg-${color}-900 hover:bg-${color}-800 rounded-md text-${color}-50 `
                  : ` shadow-lg p-2 bg-${color}-100  rounded-md text-${color}-700`
              }
            >
              2-
              <TitleComponent I={"titleStep02"} />
            </button>
            <button
              onClick={() => {
                setStep(3);
              }}
              className={
                step === 3
                  ? ` shadow-lg font-black  p-2 bg-${color}-900 hover:bg-${color}-800 rounded-md text-${color}-50 `
                  : ` shadow-lg p-2 bg-${color}-100  rounded-md text-${color}-700`
              }
            >
              3-
              <TitleComponent I={"titleStep03"} />
            </button>
            <button
              onClick={() => {
                setStep(4);
              }}
              className={
                step === 4
                  ? ` shadow-lg font-black  p-2 bg-${color}-900 hover:bg-${color}-800 rounded-md text-${color}-50 `
                  : ` shadow-lg p-2 bg-${color}-100  rounded-md text-${color}-700`
              }
            >
              4-
              <TitleComponent I={"titleStep04"} />
            </button>
            <button
              onClick={() => {
                setStep(5);
              }}
              className={
                step === 5
                  ? ` shadow-lg font-black  p-2 bg-${color}-900 hover:bg-${color}-800 rounded-md text-${color}-50 `
                  : ` shadow-lg p-2 bg-${color}-100  rounded-md text-${color}-700`
              }
            >
              5-
              <TitleComponent I={"titleStep05"} />
            </button>
            <button
              onClick={() => {
                setStep(6);
              }}
              className={
                step === 6
                  ? ` shadow-lg font-black  p-2 bg-${color}-900 hover:bg-${color}-800 rounded-md text-${color}-50 `
                  : ` shadow-lg p-2 bg-${color}-100  rounded-md text-${color}-700`
              }
            >
              6-
              <TitleComponent I={"titleStep06"} />
            </button>
          </div>
          <div>
            {step === 1 && (
              <div>
                <Step01 />
              </div>
            )}
            {step === 2 && (
              <div>
                <Step02 />
              </div>
            )}
            {step === 3 && (
              <div>
                <Step03 />
              </div>
            )}
            {step === 4 && (
              <div>
                <Step04 />
              </div>
            )}
            {step === 5 && (
              <div>
                <Step05 />
              </div>
            )}
            {step === 6 && (
              <div>
                <Step06 />
              </div>
            )}
          </div>
        </div>
        <div className={`flex items-center justify-center w-full`}>
          {step !== 1 && (
            <button
              onClick={() => {
                step > 1 && setStep(step - 1);
              }}
              className={` w-36 m-2 px-2 py-2 bg-${color}-900 hover:bg-${color}-800 rounded-md text-${color}-50`}
              type=""
            >
              <div className="flex justify-between">
                <div>
                  {lang === "english" ? (
                    <TbArrowBigLeftLinesFilled
                      className="h-6 w-6 "
                      aria-hidden="true"
                    />
                  ) : (
                    <TbArrowBigRightLinesFilled
                      className="h-6 w-6 "
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className=" font-bold">
                  <TitleComponent I={"previusStep"} />
                </div>
              </div>
            </button>
          )}

          {step !== 6 && (
            <button
              onClick={() => {
                step < 6 && setStep(step + 1);
              }}
              className={` w-36 m-2 px-2 py-2 bg-${color}-900 hover:bg-${color}-800 rounded-md text-${color}-50`}
              type=""
            >
              <div className="flex justify-between">
                <div className=" font-bold">
                  <TitleComponent I={"nextStep"} />
                </div>
                <div>
                  {lang !== "english" ? (
                    <TbArrowBigLeftLinesFilled
                      className="h-6 w-6 "
                      aria-hidden="true"
                    />
                  ) : (
                    <TbArrowBigRightLinesFilled
                      className="h-6 w-6 "
                      aria-hidden="true"
                    />
                  )}
                </div>
              </div>
            </button>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default inputForm;
