import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { MenuItem } from "semantic-ui-react";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const MenuItems = [
  { id: nanoid(), icon: "ChevronDownIcon", title: "داشبورد" },
  { id: nanoid(), icon: "ChevronDownIcon", title: "پذیرش" },
  { id: nanoid(), icon: "ChevronDownIcon", title: "لیست رشته ها" },
  { id: nanoid(), icon: "ChevronDownIcon", title: "پروفایل" },
  { id: nanoid(), icon: "ChevronDownIcon", title: "تیکت ها" },
  { id: nanoid(), icon: "ChevronDownIcon", title: "گزارش مشکل فنی" },
  { id: nanoid(), icon: "ChevronDownIcon", title: "ایمیل ها" },
];

export default function Menuuser({ firstname, lastname }) {
  return (
    <Menu as="div" className="relative inline-block  text-right">
      <div>
        <Menu.Button className="flex justify-between ">
          {firstname}{" "}{lastname}
          <ChevronDownIcon
            className="mx-2 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-b-md bg-indigo-950 bg-opacity-95 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {MenuItems.map((item) => (
              <Menu.Item key={item.id}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active
                        ? "bg-indigo-900 text-indigo-50  "
                        : " text-indigo-100 font-medium",
                      "block px-4 py-2 text-sm"
                    )}
                  >
                    {item.title}
                  </a>
                )}
              </Menu.Item>
            ))}

            <form method="POST" action="#"></form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
