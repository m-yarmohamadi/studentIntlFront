import {
  TbArrowBigLeftFilled,
  TbArrowBigLeftLinesFilled,
  TbArrowBigRightLinesFilled,
} from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { toggleStep } from "@/fuchers/steps/StepSlice";
import { useTranslation } from "react-i18next";

const NextStep = ({ disableForm, type, onSubmit }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const stepform = useSelector((state) => state.stepReducer.step);
  const lang = useSelector((state) => state.languageReducer.value.languageName);

  return (
    <div className="flex  flex-row justify-between w-full ">
      <div>
        {stepform > 1 && (
          <button
            onClick={() => dispatch(toggleStep(stepform - 1))}
            className={`border border-1 border-indigo-50 shadow-md hover:border-indigo-900 w-36 m-2 px-2 py-2 bg-indigo-900 hover:bg-indigo-800 rounded-md text-indigo-50`}
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
              <div className=" font-bold">{t("previusStep")}</div>
            </div>
          </button>
        )}
      </div>
      <div>
        {stepform < 8 && (
          <button
            disabled={disableForm}
            onClick={
              onSubmit ? onSubmit : () => dispatch(toggleStep(stepform + 1))
            }
            className={`border border-1 border-indigo-50 shadow-md hover:border-indigo-900 w-36 m-2 px-2 py-2 bg-indigo-900 hover:bg-indigo-800 rounded-md text-indigo-50`}
            type={type}
          >
            <div className="flex justify-between">
              <div className=" font-bold">{t("nextStep")}</div>
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
  );
};

export default NextStep;
