import InputSteps from "./InputSteps";
import SelectSteps from "./SelectSteps";
import TitleComponent from "../TitleComponent";
import NextStep from "./NextStep";
const Step01 = () => {
  return (
    <div className="fade-in  h-full w-full">
      <div className="vh70 rounded-md m-1 px-8 text-center bg-indigo-900 bg-opacity-60 flex flex-col justify-between">
        <div className=" py-4 text-3xl text-white font-black">
          <TitleComponent I={"titleStep01"} />
        </div>
        <form>
          <div className="  grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 ">
            <div className="  grid grid-cols-3 gap-2  mb-2">
              <InputSteps name={"firstname"} type={"text"} />
              <InputSteps name={"middlename"} type={"text"} />
              <InputSteps name={"lastname"} type={"text"} />
            </div>
            <div className=" text-sm tracking-tight border border-1 border-white px-2 py-5 bg-indigo-900 bg-opacity-75 grid grid-cols-3 gap-2  mb-2">
              <InputSteps name={"firstnamepersian"} type={"text"} />
              <InputSteps name={"middlenamepersian"} type={"text"} />
              <InputSteps name={"lastnamepersian"} type={"text"} />
            </div>
          </div>

          <div className="  grid grid-cols-3 md:grid-cols-6 gap-4 mb-4 ">
            <div className=" mb-2">
              <InputSteps name={"fathername"} type={"text"} />
            </div>
            <div className=" mb-2">
              <InputSteps name={"mothername"} type={"text"} />
            </div>
            <div className=" mb-2">
              <InputSteps name={"birthdate"} type={"date"} />
            </div>
            <div className=" mb-2">
              <SelectSteps name={"country"} value={["man", "woman"]} />
            </div>
            <div className=" mb-2">
              <SelectSteps name={"city"} value={["man", "woman"]} />
            </div>
            <div className=" mb-2">
              <SelectSteps name={"sex"} value={["man", "woman"]} />
            </div>
            <div className=" mb-2">
              <SelectSteps name={"sex"} value={["man", "woman"]} />
            </div>
            <div className=" mb-2">
              <InputSteps name={"placeOfBirth"} type={"text"} />
            </div>
            <div className=" mb-2">
              <InputSteps name={"citizenship"} type={"text"} />
            </div>
            <div className=" mb-2">
              <InputSteps name={"passportNumber"} type={"text"} />
            </div>
          </div>
        </form>
        <NextStep />
      </div>
    </div>
  );
};

export default Step01;
