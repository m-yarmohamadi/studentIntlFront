import { use, useContext } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

import Layout from "@/components/Layout";
import num2persian from "../public/num2persian-min";
import { CartContext } from "../context/Cart";
import { useRouter } from "next/router";

const cartPage = () => {
  const { state, dispatch } = useContext(CartContext);
  const {
    cart: { cartItems },
  } = state;
  const router = useRouter();

  const removeOfCartHandler = (item) => {
    dispatch({ type: "REMOVE_ITEMS", payload: item });
  };
  return (
    <Layout title="سبد خرید">
      <div className=" container  mx-auto mt-20 pt-10">
        <h1 className=" bg-gray-200  rounded-md  border p-4 shadow-sm border-gray-300  font-bold text-2xl sm: text-center mb-4 ">
          سبد خرید
        </h1>
        {cartItems.length === 0 ? (
          <div className=" py-28 sm: text-center">
            محصولی در سبد خرید شما وجود ندارد
          </div>
        ) : (
          <div className=" sm:grid-cols-none  grid-rows-2  md: gap-5">
            <div className="  overflow-x-auto sm:col-span-1 md:col-span-full">
              <table className=" min-w-full ">
                <thead className="border-b">
                  <tr>
                    <th className="px-5 py-1  text-center">عنوان محصول</th>
                    <th className="px-5 py-1 text-center">تعداد محصول</th>
                    <th className="px-5 py-1 text-center">قیمت واحد محصول</th>
                    <th className="px-5 py-1 text-center">قیمت کل محصول</th>
                    <th className="px-5 py-1 text-center">عملیات</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr
                      key={item.id}
                      className="odd:bg-white even: bg-indigo-50 border-b"
                    >
                      <td className="  px-5  text-center">
                        <span className=" flex  items-center">
                          <Image
                            className="pe-2"
                            src={item.images[0].src}
                            width={70}
                            height={30}
                          />{" "}
                          {item.title}
                        </span>
                      </td>
                      <td className="px-5 text-center">{item.qty}</td>
                      <td className="px-5 text-center">{item.price}</td>
                      <td className="px-5 text-center">
                        {parseInt(item.price)}*{parseInt(item.qty)}
                      </td>
                      <td className="px-5 text-center">
                        <button
                          onClick={() => removeOfCartHandler(item)}
                          className=" p-2  text-white rounded-md bg-indigo-500 hover:bg-indigo-600 hover: font-bold"
                        >
                          حذف محصول
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="md:flex justify-between sm:px-5 lg:px-60 my-5  rounded-md  sm:min-w-full  bg-gray-200   border border-gray-300 shadow-sm">
              <div className="py-5 text-2lg font-bold text-center">
                جمع کل:{" "}
                <span className=" font-bold text-indigo-800">
                  {cartItems.reduce((acc, cur) => acc + cur.qty * cur.price, 0)}
                </span>{" "}
                ریال
              </div>
              <div className="py-5 text-2lg font-bold text-center">
                به حروف:{" "}
                <span className=" font-bold text-indigo-800">
                  {cartItems
                    .reduce((acc, cur) => acc + cur.qty * cur.price, 0)
                    .num2persian()}
                </span>{" "}
                ریال
              </div>
            </div>
            <div>
              <div className=" text-2xl  font-extrabold items-center ">
                <button
                  onClick={() => router.push("shipping")}
                  className=" text-indigo-50  w-full p-3 rounded-md bg-indigo-900 hover:bg-indigo-950 hover: shadow-lg hover:font-bold text-center"
                >
                  تکمیل سفارش و پرداخت
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(cartPage), { ssr: false });
