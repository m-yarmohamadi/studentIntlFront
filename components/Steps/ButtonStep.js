import React from "react";
import { useDispatch, useSelector } from "react-redux";

import TitleComponent from "../TitleComponent";
import { toggleStep } from "@/fuchers/steps/StepSlice";

const ButtonStep = ({step, titleStep, Step}) => {
  const dispatch = useDispatch();
  const stepform = useSelector((state) => state.stepReducer.step);


  return (
      <button
        onClick={() => dispatch(toggleStep(step))}
        className={
          stepform === step
            ?  "shadow-lg font-bold  p-1 bg-indigo-900 hover:bg-indigo-800 rounded-md text-indigo-50" 
            : "shadow-lg p-1 bg-indigo-100  rounded-md text-indigo-700"
        }
      >
       <TitleComponent I={ Step} /> {step}:
       <br/>
       {stepform === step && <TitleComponent I={ titleStep} />}
       
        
      </button>
  );
};

export default ButtonStep;
