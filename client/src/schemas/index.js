import * as Yup from "yup";

export const signupSchema = Yup.object({
  name: Yup.string().min(2).max(25).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  password: Yup.string().min(6).required("Please Enter Your Password"),
  con_password: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});
export const loginSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Your Email"),
  password: Yup.string().min(6).required("Please Enter Your Password"),
});

export const formSchema = Yup.object({
  diseaseName: Yup.string().required("Please Enter Your Deseasename"),
  description: Yup.string().required("Please Enter Your Description"),
  symptoms: Yup.string().required("Please Enter Your Symptoms"),
  remedies: Yup.string().required("Please Enter Your Remedies"),
  precaution: Yup.string().required("Please Enter Your Precaution"),
  visual_content: Yup.string().required("Please Enter Your Visual-content"),
  emergency: Yup.string().required("Please Enter Your Emergency Contct number"),
  contact_number: Yup.string().required(
    "Please Enter Your General Contact number"
  ),
});
