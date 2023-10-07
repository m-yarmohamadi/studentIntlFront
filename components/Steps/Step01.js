import InputSteps from "./InputSteps";
import SelectSteps from "./SelectSteps";
import TitleComponent from "../TitleComponent";
const Step01 = () => {
  return (
    <div className="fade-in  h-full w-full">
      <div className="vh70  rounded-md m-1 p-8 text-center bg-indigo-900 bg-opacity-60 ">
        <div className=" py-4 text-3xl text-white font-black">
          <TitleComponent I={"titleStep01"} />
        </div>
        <form className="  grid grid-cols-1 md:grid-cols-2 gap-4 my-6 ">
          <div className=" mb-2">
            <InputSteps name={"firstname"} type={"text"} />
          </div>
          <div className=" mb-2">
            <InputSteps name={"lastname"} type={"text"} />
          </div>
          <div className=" mb-2">
            <SelectSteps name={"sex"} value={["man", "woman"]} />
          </div>
          <div className=" mb-2">
            <InputSteps name={"birthdate"} type={"date"} />
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
        </form>
      </div>
    </div>
  );
};

export default Step01;
