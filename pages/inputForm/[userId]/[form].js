import Layout from "@/components/Layout";
import Step01 from "@/components/Steps/Step01";
import Step02 from "@/components/Steps/Step02";
import Step03 from "@/components/Steps/Step03";
import Step04 from "@/components/Steps/Step04";
import Step05 from "@/components/Steps/Step05";
import Step06 from "@/components/Steps/Step06";
import Step07 from "@/components/Steps/Step07";
import Step08 from "@/components/Steps/Step08";

import ErrorBoundary from "@/components/ErrorBoundary";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TbArrowBigLeftLinesFilled,
  TbArrowBigRightLinesFilled,
} from "react-icons/tb";
import ButtonStep from "@/components/Steps/ButtonStep";

const inputForm = () => {
  const lang = useSelector((state) => state.languageReducer.value.languageName);
  const stepform = useSelector((state) => state.stepReducer.step);

  const [color, setColor] = useState("indigo");
  return (
    <Layout title="فرم ثبت نام">
      <div
        className={`h-full max-h-full fade-in l flex flex-col justify-between`}
      >
        <div className={` w-full max-w-full `}>
          <div
            className={` font-normal max-w-full grid grid-cols-3 md:grid-cols-9 gap-1 p-1`}
          >
            <ButtonStep step={1} titleStep={"titleStep01"} Step={"Step"} />
            <ButtonStep step={2} titleStep={"titleStep02"} Step={"Step"} />
            <ButtonStep step={3} titleStep={"titleStep03"} Step={"Step"} />
            <ButtonStep step={4} titleStep={"titleStep04"} Step={"Step"} />
            <ButtonStep step={5} titleStep={"titleStep05"} Step={"Step"} />
            <ButtonStep step={6} titleStep={"titleStep06"} Step={"Step"} />
            <ButtonStep step={7} titleStep={"titleStep07"} Step={"Step"} />
            <ButtonStep step={8} titleStep={"titleStep08"} Step={"Step"} />
            {/* <ButtonStep step={9} titleStep={"titleStep09"} Step={"Step"} />
            <ButtonStep step={10} titleStep={"titleStep10"} Step={"Step"} /> */}
          </div>
          <div>
            {stepform === 1 && (
              <div>
                <ErrorBoundary>
                  {" "}
                  <Step01 />
                </ErrorBoundary>
              </div>
            )}
            {stepform === 2 && (
              <div>
                <ErrorBoundary>
                  {" "}
                  <Step02 />
                </ErrorBoundary>
              </div>
            )}
            {stepform === 3 && (
              <div>
                <ErrorBoundary>
                  {" "}
                  <Step03 />
                </ErrorBoundary>
              </div>
            )}
            {stepform === 4 && (
              <div>
                <ErrorBoundary>
                  {" "}
                  <Step04 />
                </ErrorBoundary>
              </div>
            )}
            {stepform === 5 && (
              <div>
                <ErrorBoundary>
                  {" "}
                  <Step05 />
                </ErrorBoundary>
              </div>
            )}
            {stepform === 6 && (
              <div>
                <ErrorBoundary>
                  {" "}
                  <Step06 />
                </ErrorBoundary>
              </div>
            )}
            {stepform === 7 && (
              <div>
                <ErrorBoundary>
                  {" "}
                  <Step07 />
                </ErrorBoundary>
              </div>
            )}
            {stepform === 8 && (
              <div>
                <ErrorBoundary>
                  {" "}
                  <Step08 />
                </ErrorBoundary>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default inputForm;
