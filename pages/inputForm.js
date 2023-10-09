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
import Step07 from "@/components/Steps/Step07";
import Step08 from "@/components/Steps/Step08";
import Step09 from "@/components/Steps/Step09";
import Step10 from "@/components/Steps/Step10";

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
            className={` font-normal max-w-full grid grid-cols-3 md:grid-cols-11 gap-1 p-1`}
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
            <ButtonStep step={10} titleStep={"titleStep10"} Step={"Step"} />
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
            {stepform === 7 && (
              <div>
                <Step07 />
              </div>
            )}
            {stepform === 8 && (
              <div>
                <Step08 />
              </div>
            )}
            {stepform === 9 && (
              <div>
                <Step09 />
              </div>
            )}
            {stepform === 10 && (
              <div>
                <Step10 />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default inputForm;
