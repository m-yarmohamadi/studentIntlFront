import { useDispatch, useSelector } from "react-redux";

import Dashboard from "/components/admin/admindashboard/Dashboard";
import ProductRegistration from "/components/admin/admindashboard/ProductRegistration";
import EditProducts from "/components/admin/admindashboard/EditProducts";
import BasicInformation from "/components/admin/admindashboard/BasicInformation";
import EditUsers from "/components/admin/admindashboard/EditUsers";
import RecordPurchases from "/components/admin/admindashboard/RecordPurchases";
import SaleStatistics from "/components/admin/admindashboard/SaleStatistics";

import { useState } from "react";
import {
  AiOutlinePartition,
  AiOutlineAppstoreAdd,
  AiOutlineBarChart,
  AiOutlineFileAdd,
  AiOutlineUserAdd,
  AiOutlineSlack,
  AiOutlineFileProtect,
  AiOutlineDashboard
} from "react-icons/ai";
import Layout from "@/components/Layout";

const index = () => {
  const firstname = useSelector((state) => state.userReducer.firstname);
  const lastname = useSelector((state) => state.userReducer.lastname);

  const [active, setActive] = useState("Dashboard");
  return (
    <Layout title="داشبورد ادمین">






      <div className="flex h-full p-1 ">
        <div className=" bg-indigo-950  w-1/4 text-white  h-full">
          <div className="flex font-bold text-lg px-5 pt-2 m-5  bg-indigo-950  ">
            <AiOutlinePartition className="w-8 h-8 me-3" />
            {firstname ? <>{firstname}{lastname}</> : <>لطفا وارد شوید</>}
          </div>
          <hr className=" " />
          <div
            className={` cursor-pointer flex px-5 py-3 m-5 ${active == "Dashboard"
              ? `bg-rose-600 hover:bg-rose-500`
              : `bg-indigo-950 hover:bg-indigo-700`
              } rounded-lg`}
            onClick={() => setActive("Dashboard")}

          >
            <AiOutlineDashboard className="w-6 h-6 me-3" />
            داشبورد
          </div>
          <div
            className={` cursor-pointer flex px-5 py-3 m-5 ${active == "ProductRegistration"
              ? `bg-rose-600 hover:bg-rose-500`
              : `bg-indigo-950 hover:bg-indigo-700`
              }  rounded-lg`}
            onClick={() => setActive("ProductRegistration")}
          >
            <AiOutlineAppstoreAdd className="w-6 h-6 me-3" />
            ثبت دوره
          </div>
          <div
            className={` cursor-pointer flex px-5 py-3 m-5 ${active == "EditProducts"
              ? `bg-rose-600 hover:bg-rose-500`
              : `bg-indigo-950 hover:bg-indigo-700`
              }  rounded-lg`}
            onClick={() => setActive("EditProducts")}
          >
            <AiOutlineFileProtect className="w-6 h-6 me-3" />
            مشاهده و ویرایش ثبت نام ها
          </div>
          <div
            className={` cursor-pointer flex px-5 py-3 m-5 ${active == "BasicInformation"
              ? `bg-rose-600 hover:bg-rose-500`
              : `bg-indigo-950 hover:bg-indigo-700`
              }  rounded-lg`}
            onClick={() => setActive("BasicInformation")}
          >
            <AiOutlineSlack className="w-6 h-6 me-3" />
            اطلاعات پایه
          </div>
          <div
            className={` cursor-pointer flex px-5 py-3 m-5 ${active == "EditUsers"
              ? `bg-rose-600 hover:bg-rose-500`
              : `bg-indigo-950 hover:bg-indigo-700`
              }  rounded-lg`}
            onClick={() => setActive("EditUsers")}
          >
            <AiOutlineUserAdd className="w-6 h-6 me-3" />
            مشاهده و ویرایش کاربران ادمین
          </div>
          <div
            className={` cursor-pointer flex px-5 py-3 m-5 ${active == "RecordPurchases"
              ? `bg-rose-600 hover:bg-rose-500`
              : `bg-indigo-950 hover:bg-indigo-700`
              }  rounded-lg`}
            onClick={() => setActive("RecordPurchases")}
          >
            <AiOutlineFileAdd className="w-6 h-6 me-3" />
            مشاهده و ثبت خریدها
          </div>
          <div
            className={` cursor-pointer flex px-5 py-3 m-5 ${active == "SaleStatistics"
              ? `bg-rose-600 hover:bg-rose-500`
              : `bg-indigo-950 hover:bg-indigo-700`
              }  rounded-lg`}
            onClick={() => setActive("SaleStatistics")}
          >
            <AiOutlineBarChart className="w-6 h-6  me-3" />
            آمار فروش
          </div>
        </div>
        <div className=" bg-indigo-200 p-5 text-3xl text-indigo-950   w-3/4   h-full">
          {active == "Dashboard" && <Dashboard />}
          {active == "EditProducts" && <EditProducts />}
          {active == "ProductRegistration" && <ProductRegistration />}
          {active == "BasicInformation" && <BasicInformation />}
          {active == "EditUsers" && <EditUsers />}
          {active == "RecordPurchases" && <RecordPurchases />}
          {active == "SaleStatistics" && <SaleStatistics />}
        </div>
      </div>
    </Layout>
  );
};

export default index;
