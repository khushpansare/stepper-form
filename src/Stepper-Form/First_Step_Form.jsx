import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  p_name: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  p_company: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Required"),
  p_desc: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Required"),
});

function First_Step_Form({ setFormData, formData, setSteps, steps }) {
  const handleSubmit = (values) => {
    setSteps({
      ...steps,
      step_2: { at_position: true },
      step_1: { complete: true },
    });
  };

  return (
    <>
      <Formik
        initialValues={{ p_name: "", p_company: "", p_desc: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${
                errors.p_name && touched.p_name ? "border-danger" : ""
              }`}
              type="p_name"
              name="p_name"
              onChange={(e) => {
                handleChange(e);
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              onBlur={handleBlur}
              value={formData.p_name}
            />
            {errors.p_name && touched.p_name && errors.p_name}

            <br />
            <br />

            <input
              className={`form-control ${
                errors.p_company && touched.p_company ? "border-danger" : ""
              }`}
              type="p_company"
              name="p_company"
              onChange={(e) => {
                handleChange(e);
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              onBlur={handleBlur}
              value={formData.p_company}
            />
            {errors.p_company && touched.p_company && errors.p_company}
            <br />
            <br />

            <input
              className={`form-control ${
                errors.p_desc && touched.p_desc ? "border-danger" : ""
              }`}
              type="p_desc"
              name="p_desc"
              onChange={(e) => {
                handleChange(e);
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              onBlur={handleBlur}
              value={formData.p_desc}
            />
            {errors.p_desc && touched.p_desc && errors.p_desc}

            <br />
            <br />
            <button className="btn btn-primary" type="submit">
              Next
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default First_Step_Form;
