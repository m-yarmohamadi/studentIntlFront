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
    .max(30, "Enter up to 30 characters"),
  country: Yup.string()
    .required("This field is required"),
  city: Yup.string()
    .required("This field is required"),
  sex: Yup.string()
    .required("This field is required"),
  maritalstatus: Yup.string()
    .required("This field is required"),
  numOfChildren: Yup.number().when('maritalStatus', {
    is: 'married',
    then: Yup.number().required("This field is required"),
  }),
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
    .max(30, "Enter up to 30 characters"),
  dateOfExpire: Yup.string()
    .required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters"),
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
    .when('maritalStatus', {
      is: 'married',
      then: Yup.string().required("This field is required")
        .min(3, "Enter at least 3 letters")
        .max(30, "Enter up to 30 characters")
        .matches(/^[A-Za-z0-9@. ]*$/, "Please type English")
    }),
  spouseLastName: Yup.string()
    .when('maritalStatus', {
      is: 'married',
      then: Yup.string().required("This field is required")
        .min(3, "Enter at least 3 letters")
        .max(30, "Enter up to 30 characters")
        .matches(/^[A-Za-z0-9@. ]*$/, "Please type English")
      ,
    }),
  passportNoSpouse: Yup.string().when('maritalStatus', {
    is: 'married',
    then: Yup.string().required("This field is required")
      .min(9, "Enter at least 9 letters")
      .max(10, "Enter up to 10 characters")
      .matches(/^[A-Za-z0-9@. ]*$/, "Please type English")
  }),
  dateOfIssueSpouse: Yup.string().when('maritalStatus', {
    is: 'married',
    then: Yup.string().required("This field is required")
      .min(3, "Enter at least 3 letters")
      .max(30, "Enter up to 30 characters")
      .matches(/^[A-Za-z0-9@. ]*$/, "Please type English")
  }),
  dateOfExpireSpouse: Yup.string().when('maritalStatus', {
    is: 'married',
    then: Yup.string().required("This field is required")
      .min(3, "Enter at least 3 letters")
      .max(30, "Enter up to 30 characters")
      .matches(/^[A-Za-z0-9@. ]*$/, "Please type English")
  }),
});

export const Step02Validation = Yup.object({
  applicationType: Yup.string()
    .required("This field is required"),
  scholarshipType: Yup.string().when('applicationType', {


    is: (value) => value === 'scholarship',
    then: (schema) => schema.required('This field is required'),
    otherwise: (schema) => schema
  }),
  Degree: Yup.string()
    .required("This field is required"),
  firstPriority: Yup.string()
    .required("This field is required"),
  secondPriority: Yup.string(),
  thirdPriority: Yup.string(),
  sabbatical: Yup.bool(),
  degreeAndGraduationConfirmationLetter: Yup.bool(),
  studentExchangeProgram: Yup.bool(),
  Other: Yup.bool(),
  reasonForStudyingInThisUniversity: Yup.string().max(200)

})

export const Step03Validation = Yup.object({
  grade: Yup.string()
    .required("This field is required"),
  start: Yup.string().required("This field is required"),
  end: Yup.string().required("This field is required"),
  fieldOfStudy: Yup.string().required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  country: Yup.string().required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  city: Yup.string().required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z ]*$/, "Please type English"),
  schoolOrUnivercityName: Yup.string().required("This field is required")
    .min(3, "Enter at least 3 letters")
    .max(30, "Enter up to 30 characters")
    .matches(/^[A-Za-z0-9 ]*$/, "Please type English"),
  GPA: Yup.number().required("This field is required")
    .min(0, "Please enter a number greater than 0")
    .max(100, "Please enter a number less than 100"),
  outOf: Yup.number().required("This field is required")
    .min(0, "Please enter a number greater than 0")
    .max(100, "Please enter a number less than 100"),
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
