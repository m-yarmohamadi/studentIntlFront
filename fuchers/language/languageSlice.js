import { createSlice, nanoid } from "@reduxjs/toolkit";

// import Title from "/data/studentData.json";
// const x = JSON.parse(Title);
export const Title2 = [
  {
    id: nanoid(),
    name: "Step",
    english: "Step ",
    persian: "گام",
    arabic: "مرحله",
  },
  {
    id: nanoid(),
    name: "titleStep01",
    english: "Identity card/passport information",
    persian: "اطلاعات شخصی",
    arabic: "بطاقة الهوية / بيانات جواز السفر",
  },
  {
    id: nanoid(),
    name: "firstname",
    english: "Firstname",
    persian: "نام",
    arabic: "الاسم الأول",
  },
  {
    id: nanoid(),
    name: "lastname",
    english: "Lastname",
    persian: "نام خانوادگی",
    arabic: "اسم العائلة",
  },
  {
    id: nanoid(),
    name: "sex",
    english: "Sex",
    persian: "جنسیت",
    arabic: "الجنس",
  },
  {
    id: nanoid(),
    name: "birthdate",
    english: "Birthdate",
    persian: "تاریخ تولد",
    arabic: "تاريخ الميلاد",
  },
  {
    id: nanoid(),
    name: "placeOfBirth",
    english: "place of birth",
    persian: "محل تولد",
    arabic: "مكان الميلاد",
  },
  {
    id: nanoid(),
    name: "citizenship",
    english: "citizenship",
    persian: "تابعیت",
    arabic: "المواطنة",
  },
  {
    id: nanoid(),
    name: "passportNumber",
    english: "Passport number",
    persian: "شماره گذرنامه",
    arabic: "رقم جواز السفر",
  },
  {
    id: nanoid(),
    name: "titleStep02",
    english: "Previous education information",
    persian: "انتخاب اولویت های تحصیلی",
    arabic: "معلومات التعليم السابق",
  },
  {
    id: nanoid(),
    name: "placeOfPreviousEducation",
    english: "Place of previous education",
    persian: "محل تحصیل قبلی",
    arabic: "مكان التعليم السابق",
  },
  {
    id: nanoid(),
    name: "degreeTaken",
    english: "Degree taken",
    persian: "مدرک گرفته شده",
    arabic: "الدرجة التي حصل عليها",
  },
  {
    id: nanoid(),
    name: "startStudying",
    english: "Start studying",
    persian: "شروع تحصیل",
    arabic: "بدء الدراسة",
  },
  {
    id: nanoid(),
    name: "endStudying",
    english: "End studying",
    persian: "پایان تحصیل",
    arabic: "أنهِ الدراسة",
  },
  {
    id: nanoid(),
    name: "titleStep03",
    english: "New academic course information",
    persian: "اطلاعات سوابق تحصیلی",
    arabic: "معلومات الدورة الأكاديمية الجديدة",
  },
  {
    id: nanoid(),
    name: "courseType",
    english: "Course type",
    persian: "نوع دوره",
    arabic: "دورة كتابية",
  },
  {
    id: nanoid(),
    name: "fieldName",
    english: "field name",
    persian: "نام زمینه",
    arabic: "اسم الحقل",
  },
  {
    id: nanoid(),
    name: "grade",
    english: "Grade",
    persian: "مقطع تحصیلی",
    arabic: "درجة",
  },
  {
    id: nanoid(),
    name: "college",
    english: "College",
    persian: "دانشکده",
    arabic: "كلية",
  },
  {
    id: nanoid(),
    name: "titleStep04",
    english: "Required supplementary course information",
    persian: "میزان تسلط بر انواع زبان ها",
    arabic: "مطلوب معلومات الدورة التكميلية",
  },
  {
    id: nanoid(),
    name: "sendingResume",
    english: "sending resume",
    persian: "ارسال رزومه",
    arabic: "إرسال السيرة الذاتية",
  },
  {
    id: nanoid(),
    name: "sendAMotivationLetter",
    english: "Send a motivation letter",
    persian: "ارسال درخواست",
    arabic: "أرسل خطاب تحفيز",
  },
  {
    id: nanoid(),
    name: "letterOfIntroductionFromTheProfessor",
    english: "Letter of introduction from the professor",
    persian: "معرفی نامه استاد",
    arabic: "خطاب مقدمة من الأستاذ",
  },
  {
    id: nanoid(),
    name: "titleStep05",
    english: "Applicant's contact information",
    persian: "اطلاعات داور (درصورت وجود)",
    arabic: "معلومات الاتصال لمقدم الطلب",
  },
  {
    id: nanoid(),
    name: "email",
    english: "Email",
    persian: "آدرس ایمیل",
    arabic: "بريد إلكتروني",
  },
  {
    id: nanoid(),
    name: "phonenumber",
    english: "Phonenumber",
    persian: "شماره تلفن",
    arabic: "رقم التليفون",
  },
  {
    id: nanoid(),
    name: "address",
    english: "Address",
    persian: "نشانی",
    arabic: "عنوان",
  },
  {
    id: nanoid(),
    name: "mobile",
    english: "Mobile",
    persian: "شماره تلفن همراه",
    arabic: "موبیل",
  },
  {
    id: nanoid(),
    name: "ontactNumberOfAnAcquaintanceForEmergencies",
    english: "ontact number of an acquaintance for emergencies",
    persian: "شماره تماس یکی از آشنایان برای مواقع اضطراری",
    arabic: "رقم الاتصال لأحد المعارف لحالات الطوارئ",
  },
  {
    id: nanoid(),
    name: "titleStep06",
    english: "Upload documents",
    persian: "مقاله، کتاب و ...",
    arabic: "تحميل الوثائق",
  },
  {
    id: nanoid(),
    name: "titleStep07",
    english: "",
    persian: "اطلاعات آشنایان ایرانی",
    arabic: "",
  },
  {
    id: nanoid(),
    name: "titleStep08",
    english: "",
    persian: "اطلاعات خانواده",
    arabic: "",
  },
  {
    id: nanoid(),
    name: "titleStep09",
    english: "",
    persian: "آپلود فایل ها",
    arabic: "",
  },
  {
    id: nanoid(),
    name: "titleStep10",
    english: "",
    persian: "پیش نمایش",
    arabic: "",
  },
  {
    id: nanoid(),
    name: "uploadAPhoto",
    english: "Upload a Photo",
    persian: "بارگزاری عکس",
    arabic: "حمل الصورة",
  },
  {
    id: nanoid(),
    name: "passportPicture",
    english: "passport picture",
    persian: "بارگزاری گذرنامه",
    arabic: "صورة جواز السفر",
  },
  {
    id: nanoid(),
    name: "imageOfThePreviousDegree",
    english: "Image of the previous degree",
    persian: "تصویر مدرک قبلی",
    arabic: "صورة الدرجة السابقة",
  },
  {
    id: nanoid(),
    name: "nextStep",
    english: "Next Step",
    persian: "مرحله بعد",
    arabic: "المرحلة التالية",
  },
  {
    id: nanoid(),
    name: "previusStep",
    english: "Previus Step",
    persian: "مرحله قبل",
    arabic: "المرحلة السابقة",
  },
  {
    id: nanoid(),
    name: "man",
    english: "Man",
    persian: "مرد",
    arabic: "رجل",
  },
  {
    id: nanoid(),
    name: "woman",
    english: "Woman",
    persian: "زن",
    arabic: "أنثى",
  },
  {
    id: nanoid(),
    name: "RegistrationSystemForForeignStudents",
    english: "Registration system for foreign students",
    persian: "سامانه ثبت نام دانشجویان خارجی",
    arabic: "نظام التسجيل للطلاب الأجانب",
  },
  {
    id: nanoid(),
    name: "login",
    english: "login",
    persian: "ورود",
    arabic: "تسجيل الدخول",
  },
  {
    id: nanoid(),
    name: "password",
    english: "Password",
    persian: "کلمه عبور",
    arabic: "كلمة المرور",
  },
  {
    id: nanoid(),
    name: "confirmPassword",
    english: "confirm Password",
    persian: "تکرار کلمه عبور",
    arabic: "اعد كلمة السر",
  },
  {
    id: nanoid(),
    name: "register",
    english: "register",
    persian: "ثبت نام",
    arabic: "يسجل",
  },
  {
    id: nanoid(),
    name: "rememberMe",
    english: "Remember me",
    persian: "من را به خاطر بسپار",
    arabic: "remember me",
  },
  {
    id: nanoid(),
    name: "iForgotMyPassword",
    english: "I forgot my password",
    persian: "کلمه عبور خود را فراموش کرده ام.",
    arabic: "I forgot my password",
  },
  {
    id: nanoid(),
    name: "dontHaveAnAccount",
    english: "Don't have an account?",
    persian: "اکانت ندارید؟",
    arabic: "Don't have an account?",
  },
  {
    id: nanoid(),
    name: "registrationNotices",
    english: "Registration notices",
    persian: "اطلاعیه های ثبت نام",
    arabic: "إخطارات التسجيل",
  },
  {
    id: nanoid(),
    name: "newStudentRegistrationForMehr",
    english: "New student registration for Mehr",
    persian: "ثبت نام دانشجوی جدید ورودی مهر",
    arabic: "تسجيل الطلاب الجدد دخول مهر",
  },
  {
    id: nanoid(),
    name: "theRegistrationPeriodHasEnded",
    english: "The registration period has ended",
    persian: "مهلت ثبت نام پایان یافته",
    arabic: "انتهت فترة التسجيل",
  },
  {
    id: nanoid(),
    name: "iAcceptTheTermsAndConditionsOfTheSite",
    english: "I accept the terms and conditions of the site",
    persian: "قوانین و شرایط سایت را می پذیرم.",
    arabic: "أوافق على شروط وأحكام الموقع.",
  },
  {
    id: nanoid(),
    name: "alreadyRegistered",
    english: "Already registered?",
    persian: "قبلا ثبت نام کرده اید؟",
    arabic: "مسجل بالفعل؟",
  },
  {
    id: nanoid(),
    name: "verificationCodeReceived",
    english: "Verification code received",
    persian: "کد تأیید دریافت شده:",
    arabic: "تم استلام رمز التحقق",
  },
  {
    id: nanoid(),
    name: "confirmation",
    english: "Confirmation",
    persian: "تأیید",
    arabic: "تأكيد",
  },
  {
    id: nanoid(),
    name: "fullTime",
    english: "Full Time",
    persian: "",
    arabic: "",
  },
  {
    id: nanoid(),
    name: "inPerson",
    english: "In Person",
    persian: "",
    arabic: "",
  },
  {
    id: nanoid(),
    name: "notInPerosn",
    english: "Not In Perosn",
    persian: "",
    arabic: "",
  },
  {
    id: nanoid(),
    name: "medical",
    english: "Medical",
    persian: "",
    arabic: "",
  },
  {
    id: nanoid(),
    name: "dental",
    english: "Dental",
    persian: "",
    arabic: "",
  },
  {
    id: nanoid(),
    name: "bachelorsDegree",
    english: "Bachelor's degree",
    persian: "",
    arabic: "",
  },
  {
    id: nanoid(),
    name: "mastersDegree",
    english: "Master's degree",
    persian: "",
    arabic: "",
  },
  {
    id: nanoid(),
    name: "phd",
    english: "P.H.D",
    persian: "",
    arabic: "",
  },
  {
    id: nanoid(),
    name: "medicalSchool",
    english: "Medical School",
    persian: "",
    arabic: "",
  },
  {
    id: nanoid(),
    name: "dentalCollege",
    english: "Dental College",
    persian: "",
    arabic: "",
  },
];

export const Title = {
  english: {
    titleStep01: "Identity card/passport information",
    firstname: "Firstname",
    lastname: "Lastname",
    sex: "Sex",
    birthdate: "Birthdate",
    placeOfBirth: "place of birth",
    citizenship: "citizenship",
    passportNumber: "Passport number",

    titleStep02: "Previous education information",
    placeOfPreviousEducation: "Place of previous education",
    degreeTaken: "Degree taken",
    startStudying: "Start studying",
    endStudying: "End studying",

    titleStep03: "New academic course information",
    courseType: "Course type",
    fieldName: "field name",
    grade: "Grade",
    college: "College",

    titleStep04: "Required supplementary course information",
    sendingResume: "sending resume",
    sendAMotivationLetter: "Send a motivation letter",
    letterOfIntroductionFromTheProfessor:
      "Letter of introduction from the professor",

    titleStep05: "Applicant's contact information",
    email: "Email",
    phonenumber: "Phonenumber",
    address: "Address",
    mobile: "Mobile",
    ontactNumberOfAnAcquaintanceForEmergencies:
      "ontact number of an acquaintance for emergencies",

    titleStep06: "Upload documents",
    uploadAPhoto: "Upload a Photo",
    passportPicture: "passport picture",
    imageOfThePreviousDegree: "Image of the previous degree",
    nextStep: "Next Step",
    previusStep: "Previus Step",
    man: "Man",
    woman: "Woman",
    RegistrationSystemForForeignStudents:
      "Registration system for foreign students",
    login: "login",
    password: "Password",
    confirmPassword: "confirm Password",
    register: "register",
    rememberMe: "Remember me",
    iForgotMyPassword: "I forgot my password",
    dontHaveAnAccount: "Don't have an account?",

    registrationNotices: "Registration notices",
    newStudentRegistrationForMehr: "New student registration for Mehr ",
    theRegistrationPeriodHasEnded: "The registration period has ended",
    iAcceptTheTermsAndConditionsOfTheSite:
      "I accept the terms and conditions of the site",
    alreadyRegistered: "Already registered?",
  },
  persian: {
    titleStep01: "اطلاعات کارت شناسایی/گذرنامه",
    firstname: "نام",
    lastname: "نام خانوادگی",
    sex: "جنسیت",
    birthdate: "تاریخ تولد",
    placeOfBirth: "محل تولد",
    citizenship: "تابعیت",
    passportNumber: "شماره گذرنامه",

    titleStep02: "اطلاعات تحصیلی قبلی",
    placeOfPreviousEducation: "محل تحصیل قبلی",
    degreeTaken: "مدرک گرفته شده",
    startStudying: "شروع تحصیل",
    endStudying: "پایان تحصیل",

    titleStep03: "اطلاعات جدید دروس دانشگاهی",
    courseType: "نوع دوره",
    fieldName: "نام زمینه",
    grade: "مقطع تحصیلی",
    college: "دانشکده",

    titleStep04: "اطلاعات دوره تکمیلی مورد نیاز",
    sendingResume: "ارسال رزومه",
    sendAMotivationLetter: "ارسال درخواست",
    letterOfIntroductionFromTheProfessor: "معرفی نامه استاد",

    titleStep05: "اطلاعات تماس متقاضی",
    email: "آدرس ایمیل",
    phonenumber: "شماره تلفن",
    address: "نشانی",
    mobile: "شماره تلفن همراه",
    contactNumberOfAnAcquaintanceForEmergencies:
      "شماره تماس یکی از آشنایان برای مواقع اضطراری",

    titleStep06: "بارگزاری مدارک",
    uploadAPhoto: "بارگزاری عکس",
    passportPicture: "بارگزاری گذرنامه",
    imageOfThePreviousDegree: "تصویر مدرک قبلی",
    nextStep: "مرحله بعد",
    previusStep: "مرحله قبل",
    man: "مرد",
    woman: "زن",
    RegistrationSystemForForeignStudents: "سامانه ثبت نام دانشجویان خارجی",
    login: "ورود",
    password: "کلمه عبور",
    confirmPassword: "تکرار کلمه عبور",
    register: "ثبت نام",
    rememberMe: "من را به خاطر بسپار",
    iForgotMyPassword: "کلمه عبور خود را فراموش کرده ام.",
    dontHaveAnAccount: "اکانت ندارید؟",

    registrationNotices: "اطلاعیه های ثبت نام",
    newStudentRegistrationForMehr: "ثبت نام دانشجوی جدید ورودی مهر  ",
    theRegistrationPeriodHasEnded: "مهلت ثبت نام پایان یافته",
    iAcceptTheTermsAndConditionsOfTheSite: "قوانین و شرایط سایت را می پذیرم.",
    alreadyRegistered: "قبلا ثبت نام کرده اید؟",
  },
  arabic: {
    titleStep01: "بطاقة الهوية / بيانات جواز السفر",
    firstname: "الاسم الأول",
    lastname: "اسم العائلة",
    sex: "الجنس",
    birthdate: "تاريخ الميلاد",
    placeOfBirth: "مكان الميلاد",
    citizenship: "المواطنة",
    passportNumber: "رقم جواز السفر",

    titleStep02: "معلومات التعليم السابق",
    placeOfPreviousEducation: "مكان التعليم السابق",
    degreeTaken: "الدرجة التي حصل عليها",
    startStudying: "بدء الدراسة",
    endStudying: "أنهِ الدراسة",

    titleStep03: "معلومات الدورة الأكاديمية الجديدة",
    courseType: "دورة كتابية",
    fieldName: "اسم الحقل",
    grade: "درجة",
    college: "كلية",

    titleStep04: "مطلوب معلومات الدورة التكميلية",
    sendingResume: "إرسال السيرة الذاتية",
    sendAMotivationLetter: "أرسل خطاب تحفيز",
    letterOfIntroductionFromTheProfessor: "خطاب مقدمة من الأستاذ",

    titleStep05: "معلومات الاتصال لمقدم الطلب",
    email: "بريد إلكتروني",
    phonenumber: "رقم التليفون",
    address: "عنوان",
    mobile: "موبیل",
    ontactNumberOfAnAcquaintanceForEmergencies:
      "رقم الاتصال لأحد المعارف لحالات الطوارئ",

    titleStep06: "تحميل الوثائق",
    uploadAPhoto: "حمل الصورة",
    passportPicture: "صورة جواز السفر",
    imageOfThePreviousDegree: "صورة الدرجة السابقة",
    nextStep: "المرحلة التالية",
    previusStep: "المرحلة السابقة",
    man: "رجل",
    woman: "أنثى",
    RegistrationSystemForForeignStudents: "نظام التسجيل للطلاب الأجانب",
    login: "تسجيل الدخول",
    password: "كلمة المرور",
    cofirmPassword: "اعد كلمة السر",
    register: "يسجل",
    rememberMe: "remember me",
    iForgotMyPassword: "I forgot my password",
    DontHaveAnAccount: "Don't have an account?",

    registrationNotices: "إخطارات التسجيل",
    newStudentRegistrationForMehr: "تسجيل الطلاب الجدد دخول مهر ",
    theRegistrationPeriodHasEnded: "انتهت فترة التسجيل",
    iAcceptTheTermsAndConditionsOfTheSite: "أوافق على شروط وأحكام الموقع.",
    alreadyRegistered: "مسجل بالفعل؟",
  },
};

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    value: {
      languageName: "english",
      direction: "ltr",
      font: "Arial",
      title: Title2.map((item) => item.english),
    },
  },
  reducers: {
    english: (state) => {
      state.value = {
        languageName: "english",
        direction: "ltr",
        font: "Vazir",
        title: Title2.map((item) => item.english),
      };
    },
    persian: (state) => {
      state.value = {
        languageName: "persian",
        direction: "rtl",
        font: "IRANSans",
        title: Title2.map((item) => item.persian),
      };
    },
    arabic: (state) => {
      state.value = {
        languageName: "arabic",
        direction: "rtl",
        font: "Arial",
        title: Title2.map((item) => item.arabic),
      };
    },
  },
});
export const { english, persian, arabic } = languageSlice.actions;
export default languageSlice.reducer;
