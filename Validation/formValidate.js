import * as Yup from "yup";

export const validationSchema = Yup.object({
  firstname: Yup.string()
    .required("completionOfThisItemIsMandatory")
    .min(3, "completionOfThisItemIsMandatory")
    .max(30, "completionOfThisItemIsMandatory")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  lastname: Yup.string()
    .required("Lastname is Required")
    .min(3, "The length of this field should not be less than 3 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  email: Yup.string()
    .email("Invalid Email Format")
    .required("Email is Required"),
  mobile: Yup.string()
    .required("Mobile is Required")
    .matches(/^[0-9]{11}$/, "Invalid Mobile"),
  password: Yup.string().required("Password is Required"),
  confirmPassword: Yup.string()
    .required("confirmPassword is Required")
    .oneOf(
      [Yup.ref("password"), null],
      "The password and its repetition must be the same "
    ),
});
