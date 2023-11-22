import Students from "@/components/Steps/Students";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
const dashboard = () => {
  const data = [
    {
      label: "ثبت کالا",
      value: "html",
      desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people
          who are like offended by it, it doesn't matter.`,
    },
    {
      label: "مشاهده کالاهای خریداری شده",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "آمار فروش",
      value: "vue",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "اطلاعات پایه",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
    },
  ];

  return (
    <div className=" container mx-auto ">
      <div className="relative rounded-lg grid    bg-indigo-200">
        <div className=" text-white font-black col-start-1 col-end-2  bg-indigo-200  p-4 ">
          <div className="text-center  border-4 border-double hover:border-solid bg-indigo-500 w-full py-3 my-1 px-0 rounded-md hover:bg-indigo-600 shadow-lg hover:shadow-md">
            <button className="   " type="">
              ثبت محصولات
            </button>
          </div>
          <div className="text-center  border-4 border-double hover:border-solid bg-indigo-500 w-full py-3 my-1 px-0 rounded-md hover:bg-indigo-600 shadow-lg hover:shadow-md">
            <button className="   " type="">
              مشاهده و ویرایش محصولات
            </button>
          </div>
          <div className="text-center  border-4 border-double hover:border-solid bg-indigo-500 w-full py-3 my-1 rounded-md hover:bg-indigo-600 shadow-lg hover:shadow-md">
            <button className="   " type="">
              اطلاعات پایه
            </button>
          </div>
          <div className="text-center  border-4 border-double hover:border-solid bg-indigo-500 w-full py-3 my-1 rounded-md hover:bg-indigo-600 shadow-lg hover:shadow-md">
            <button className="   " type="">
              مشاهده و ویرایش کاربران
            </button>
          </div>
          <div className="text-center  border-4 border-double hover:border-solid bg-indigo-500 w-full py-3 my-1 rounded-md hover:bg-indigo-600 shadow-lg hover:shadow-md">
            <button className="   " type="">
              مشاهده و ثبت خریدها
            </button>
          </div>
          <div className="text-center  border-4 border-double hover:border-solid bg-indigo-500 w-full py-3 my-1 rounded-md hover:bg-indigo-600 shadow-lg hover:shadow-md">
            <button className="   " type="">
              ثبت محصولات
            </button>
          </div>
        </div>
        <div
          id=""
          className="relative  col-start-2 col-end-12 border-2 bg-indigo-50 "
        >
          <Students />
        </div>
        <div className="  absolute top-0 right-0  border-2 col-start-2 col-end-12  bg-indigo-100 ">
          43553
        </div>
        <div className=" opacity-25 absolute top-0 right-0  border-2 col-start-2 col-end-12  bg-indigo-100 ">
          5555555555555555
        </div>
      </div>
    </div>
  );
};

export default dashboard;
