import React from "react";
import { useDispatch, useSelector } from "react-redux";

import TitleComponent from "../TitleComponent";
import { toggleStep } from "@/fuchers/steps/StepSlice";

const ButtonStep = ({ step, titleStep, Step }) => {
  const dispatch = useDispatch();
  const stepform = useSelector((state) => state.stepReducer.step);

  return (
    <button
      onClick={() => dispatch(toggleStep(step))}
      className={
        stepform === step
          ? "col-span-2 shadow-lg font-extrabold  p-1  bg-indigo-900 hover:bg-indigo-800 rounded-md text-indigo-50 w-full"
          : " font-extrabold shadow-lg py-1 bg-indigo-100  rounded-md text-indigo-700 w-full"
      }
    >
      <TitleComponent I={Step} />
      {""} {step}:
      <br />
      {/* {stepform === step && <TitleComponent I={titleStep} />} */}
      <div className={stepform !== step ? " text-xs p-0 m-0" : " font-bold"}>
        <TitleComponent I={titleStep} />
      </div>
    </button>
  );
};

export default ButtonStep;
