import { Title2 } from "@/fuchers/language/languageSlice";
import React from "react";
import { useSelector } from "react-redux";

const TitleComponent = ({ I }) => {
  const language = useSelector((state) => state.languageReducer.value.title);

  const itemIndex = Title2.findIndex((item) => item.name === I);

  const text = language[itemIndex];

  return <>{text}</>;
};

export default TitleComponent;
