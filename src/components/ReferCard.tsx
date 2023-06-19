import React, { useState } from "react";
import InputC from "./tsx_custom/InputC";
import emailIcon from "../assets/email.svg";
import ButtonC from "./tsx_custom/ButtonC";
import SuccessLogo from "../assets/success.svg";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../state/store";
import { fetchEmails, saveEmails } from "../state/reduxThunk";
import {
  selectEmails,
  selectLoading,
  selectError,
  selectSuccess,
  Email,
} from "../state/emailSlice";

interface ReferCardProps {}

const ReferCard: React.FC<ReferCardProps> = () => {
  const dispatch: AppDispatch = useDispatch();
  const loading: boolean = useSelector(selectLoading);
  const success: boolean = useSelector(selectSuccess);
  const handleSaveEmails = (email: Email) => {
    dispatch(saveEmails(email)).catch((error: Error) => {
      console.log(error);
    });
  };
  // Creating a input vaildation schema using Yup
  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required!"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      handleSaveEmails({ email: values.email });
      formik.resetForm();
    },
  });

  const inputProps = {
    type: "text",
    name: "email",
    value: formik.values.email,
    onChange: formik.handleChange,
    placeholder: "Enter your email address",
  };
  return (
    <section className="refer">
      <h3 className="refer__title">REFER FRIENDS AND GET REWARDS</h3>
      <p className="refer__text">
        Refer your friends to us and earn hotel booking vouchers. We'll give you
        1 coin for each friend that installs our extension. Minimum cash-out at
        20 coins.
      </p>
      <div className="refer__error">
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
        {loading && <p className="refer__error_color">Loading...</p>}
        {success && !formik.touched.email && !formik.errors.email ? (
          <div className="refer__success_wrapper">
            <img src={SuccessLogo} alt="success logo" />
            <p className="refer__success_wrapper_text">
              Your email is confirmed!
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <InputC icon={emailIcon} alt={"email icon"} props={{ ...inputProps }} />
      <ButtonC onClick={formik.handleSubmit}>Get Referral Link</ButtonC>

      <p className="refer__limit">Limits on max rewards apply.</p>
    </section>
  );
};

export default ReferCard;
