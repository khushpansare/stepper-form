import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  p_price: Yup.number("Contain only numbers").required("Required"),
  p_discount: Yup.number("Contain only numbers").required("Required"),
});

function Second_Step_Form({ setFormData, formData, setSteps, steps }) {
  const handleSubmit = (values) => {
    setSteps({
      ...steps,
      step_3: { at_position: true },
      step_2: { complete: true },
    });
  };

  return (
    <>
      <Formik
        initialValues={{ p_price: "", p_discount: "" }}
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
              type="p_price"
              name="p_price"
              onChange={(e) => {
                handleChange(e);
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              onBlur={handleBlur}
              value={values.p_price}
            />
            {errors.p_price && touched.p_price && errors.p_price}

            <br />
            <br />

            <input
              type="p_discount"
              name="p_discount"
              onChange={(e) => {
                handleChange(e);
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              onBlur={handleBlur}
              value={values.p_discount}
            />
            {errors.p_discount && touched.p_discount && errors.p_discount}
            <br />
            <br />

            <button type="submit">Next</button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default Second_Step_Form;
