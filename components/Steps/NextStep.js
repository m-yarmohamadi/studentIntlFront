import { TbArrowBigLeftFilled, TbArrowBigLeftLinesFilled, TbArrowBigRightLinesFilled } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import TitleComponent from "../TitleComponent";
import { toggleStep } from "@/fuchers/steps/StepSlice";

const NextStep = () => {
  const dispatch = useDispatch();

    const stepform = useSelector((state) => state.stepReducer.step);
    const lang = useSelector((state) => state.languageReducer.value.languageName);


  return (
    <div>
      <div className={` flex items-center justify-center w-full`}>
          <button
            // onClick={() => {
            //   stepform > 1 && (() => dispatch(toggleStep(stepform - 1)));
            // }}
            onClick={() => dispatch(toggleStep(stepform - 1))}
            className={` w-36 m-2 px-2 py-2 bg-indigo-900 hover:bg-indigo-800 rounded-md text-indigo-50`}
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

          <button
            onClick={() => {
              stepform < 10 && (() => dispatch(toggleStep(stepform + 1)));
            }}
            className={` w-36 m-2 px-2 py-2 bg-indigo-900 hover:bg-indigo-800 rounded-md text-indigo-50`}
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
      </div>
      
    </div>
  );
};

export default NextStep;
