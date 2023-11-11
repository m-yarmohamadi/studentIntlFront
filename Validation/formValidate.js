import * as Yup from "yup";

export const Step01Validation = Yup.object({
  firstname: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  middlename: Yup.string()
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  lastname: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  firstnamepersian: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[\u0600-\u06FF\s]+$/, "Please type Persian"),
  middlenamepersian: Yup.string()
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[\u0600-\u06FF\s]+$/, "Please type Persian"),
  lastnamepersian: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[\u0600-\u06FF\s]+$/, "Please type Persian"),
  fathername: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  mothername: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  dateOfBirth: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  country: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  city: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  sex: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  maritalstatus: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  numOfChildren: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  religion: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  passportNumber: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[0-9]*$/, "Please type Number"),
  dateOfIssue: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  dateOfExpire: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  placeOfIssue: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  nationalities: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  address: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  tel: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[0-9]*$/, "Please type Number"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z0-9@. ]*$/, "Please type English"),
  fax: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[0-9]*$/, "Please type Number"),
  mobile: Yup.string()
    .required("This field is required")
    .matches(/^[0-9]{11}$/, "Invalid Mobile"),
  spouseFirstName: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  spouseLastName: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  passportNo: Yup.string()
    .required("This field is required")
    .matches(/^[0-9]{10}$/, "Invalid Pasport Number"),
});
export const Step04Validation = Yup.object({
  languageName: Yup.string().required("Required"),
  nativeLanguage: Yup.string().required("Required"),
  reading: Yup.string().required("Required"),
  writing: Yup.string().required("Required"),
  speaking: Yup.string().required("Required"),
  fileLanguage: Yup.string(),
});

export const Step06Validation = Yup.object({
  publicationType: Yup.string().required("Required"),
  title: Yup.string().required("Required"),
  publisher: Yup.string().required("Required"),
  year: Yup.string().required("Required"),
});
