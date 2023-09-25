import Layout from "@/components/Layout";
import React from "react";
import { Title, Title2 } from "@/fuchers/language/languageSlice";
import { UseSelector, useDispatch, useSelector } from "react-redux";

const dictionary = () => {
  return (
    <Layout>
      <div className=" overflow-auto h-full font-extrabold p-2">
        <div className="h-full pb-12">
          <h1 className=" p-2 text-2xl font-extrabold">فرهنگ لغت کلمات</h1>
          <table className=" table-auto bg-indigo-50 w-full h-full overflow-auto border border-indigo-950 p-2 bg-opacity-70">
            <thead className="bg-indigo-900 text-indigo-100">
              <tr>
                <th>لغت/اصطلاح</th>
                <th>انگلیسی</th>
                <th>فارسی</th>
                <th>عربی</th>
              </tr>
            </thead>
            <tbody>
              {Title2.map((item) => (
                <tr
                  key={item.id}
                  className=" text-indigo-900 font-medium  border-indigo-900 "
                >
                  <td className=" pt-3 w-1/4">{item.name}</td>
                  <td className="pe-2 w-1/4">
                    <input
                      type="text"
                      defaultValue={item.english}
                      className=" block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </td>
                  <td className="pe-2 w-1/4">
                    <input
                      type="text"
                      defaultValue={item.persian}
                      className=" block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </td>
                  <td className="pe-2 w-1/4">
                    <input
                      type="text"
                      defaultValue={item.arabic}
                      className=" block w-full px-4 py-2 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default dictionary;
