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
import ButtonStep from "@/components/Steps/ButtonStep";

const inputForm = () => {
  const lang = useSelector((state) => state.languageReducer.value.languageName);
  const stepform = useSelector((state) => state.stepReducer.step);

  const [color, setColor] = useState("indigo");
  return (
    <Layout title="فرم ثبت نام">
      <div className={`fade-in h-full flex flex-col justify-between`}>
        <div className={` w-full max-w-full `}>
          <div
            className={` font-normal max-w-full grid grid-cols-3 md:grid-cols-10 gap-1 p-1`}
          >
            <ButtonStep step={1} titleStep={"titleStep01"} Step={"Step"} />
            <ButtonStep step={2} titleStep={"titleStep02"} Step={"Step"} />
            <ButtonStep step={3} titleStep={"titleStep03"} Step={"Step"} />
            <ButtonStep step={4} titleStep={"titleStep04"} Step={"Step"} />
            <ButtonStep step={5} titleStep={"titleStep05"} Step={"Step"} />
            <ButtonStep step={6} titleStep={"titleStep06"} Step={"Step"} />
            <ButtonStep step={7} titleStep={"titleStep07"} Step={"Step"} />
            <ButtonStep step={8} titleStep={"titleStep08"} Step={"Step"} />
            <ButtonStep step={9} titleStep={"titleStep09"} Step={"Step"} />
            <ButtonStep step={10} titleStep={"titleStep010"} Step={"Step"} />
          </div>
          <div>
            {stepform === 1 && (
              <div>
                <Step01 />
              </div>
            )}
            {stepform === 2 && (
              <div>
                <Step02 />
              </div>
            )}
            {stepform === 3 && (
              <div>
                <Step03 />
              </div>
            )}
            {stepform === 4 && (
              <div>
                <Step04 />
              </div>
            )}
            {stepform === 5 && (
              <div>
                <Step05 />
              </div>
            )}
            {stepform === 6 && (
              <div>
                <Step06 />
              </div>
            )}
          </div>
        </div>
        <div className={`flex items-center justify-center w-full`}>
          {stepform !== 1 && (
            <button
              onClick={() => {
                stepform > 1 && (() => dispatch(toggleStep(stepform - 1)));
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

          {stepform !== 10 && (
            <button
              onClick={() => {
                stepform < 10 && (() => dispatch(toggleStep(stepform + 1)));
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
