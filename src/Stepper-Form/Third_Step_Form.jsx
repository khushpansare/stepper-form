import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  rating: Yup.number("Contain only numbers").required("Required"),
  comment: Yup.string()
    .max(100, "Less than 100 characters")
    .required("Required"),
});

function Third_Step_Form({ setFormData, formData, setSteps, steps }) {
  const handleSubmit = (values) => {
    setSteps({
      ...steps,
      step_3: { complete: true },
    });

    console.log("Form Data:", formData);
  };
  return (
    <>
      <Formik
        initialValues={{ rating: "", comment: "" }}
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
                errors.rating && touched.rating ? "border-danger" : ""
              }`}
              type="rating"
              name="rating"
              onChange={(e) => {
                handleChange(e);
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              onBlur={handleBlur}
              value={values.rating}
            />
            {errors.rating && touched.rating && errors.rating}

            <br />
            <br />

            <input
              className={`form-control ${
                errors.comment && touched.comment ? "border-danger" : ""
              }`}
              type="comment"
              name="comment"
              onChange={(e) => {
                handleChange(e);
                setFormData({ ...formData, [e.target.name]: e.target.value });
              }}
              onBlur={handleBlur}
              value={values.comment}
            />
            {errors.comment && touched.comment && errors.comment}
            <br />
            <br />

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default Third_Step_Form;
